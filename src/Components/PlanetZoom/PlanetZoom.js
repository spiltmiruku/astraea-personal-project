import React, { useEffect } from "react";
import * as d3 from "d3";
import "./planetzoom.css";

const PlanetZoom = () => {
  useEffect(() => {
    function make(data) {
      // Dimensions and base

      var margin = {
        top: window.innerHeight * 0.3,
        left: 50,
        bottom: window.innerHeight * 0.4,
        right: 50
      };
      // The chart *and* screen height

      var height = window.innerHeight - margin.top - margin.bottom;
      // Calculate width
      var mapScale = 1 / 10e4;
      var maxDist = d3.max(data, function(d) {
        return d.distance;
      });
      // The full width of all planets
      var chartWidth = maxDist * mapScale;
      // SVG width will only be as large as screen
      var screenWidth = window.innerWidth - margin.left - margin.right;
      // SVG
      var svg = d3
        .select("#vis")
        .append("svg")
        .attr("width", screenWidth + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "chart")
        .attr(
          "transform",
          "translate(" + margin.left + ", " + margin.top + ")"
        );

      var listenerRect = svg
        .append("rect")
        .attr("class", "listener-rect")
        .attr("x", 0)
        .attr("y", -margin.top)
        .attr("width", screenWidth)
        .attr("height", height + margin.top + margin.bottom)
        .style("opacity", 0);

      // Glow

      var defs = svg.append("defs");
      var glow = defs
        .append("filter")
        .attr("id", "soft-glow")
        .attr("x", "-200%")
        .attr("y", "-200%") // start of the filter area
        .attr("height", "500%")
        .attr("width", "500%");
      // size of the filter area (start + 100% + end)
      glow
        .append("feMorphology")
        .attr("operator", "dilate")
        .attr("radius", 1)
        .attr("in", "SourceAlpha")
        .attr("result", "thicken");
      // feMorphology can fatten or thin elements.
      glow
        .append("feGaussianBlur")
        .attr("in", "thicken")
        .attr("stdDeviation", 4)
        .attr("result", "blurred");
      // feGaussianBlur can feather elements.
      glow
        .append("feFlood")
        .attr("flood-color", "deeppink")
        .attr("result", "glowColour");
      // feFlood fills or 'floods' the filter area
      // with the specified color.
      glow
        .append("feComposite")
        .attr("in", "glowColour")
        .attr("in2", "blurred")
        .attr("operator", "in")
        .attr("result", "softGlow_colored");
      // feComposite stitches filter effects together
      var merge = glow.append("feMerge");
      merge.append("feMergeNode").attr("in", "softGlow_colored");
      merge.append("feMergeNode").attr("in", "SourceGraphic");
      // merge applies filter to element

      // Scales
      var rExtent = d3.extent(data, function(d) {
        return d.radius;
      });

      var rScale = d3
        .scaleLinear()
        .domain([0, rExtent[1]])
        .range([3, (height / 2) * 0.9]);
      var xScale = d3
        .scaleLinear()
        .domain([0, maxDist])
        .range([0, chartWidth]);

      // Axes components

      var xAxis = d3
        .axisBottom(xScale)
        .tickSizeOuter(0)
        .tickPadding(10)
        .tickValues(
          data.map(function(el) {
            return el.distance;
          })
        )
        .tickFormat(function(d, i) {
          return data[i].planet + " " + d3.format(",")(d) + " km";
        });
      // Axes draw

      // Drawing the axis

      var xAxisDraw = svg
        .insert("g", ":first-child")
        .attr("class", "x axis")
        .call(xAxis);
      // Move the axis-labels and -lines down
      var labelHeight = xAxisDraw
        .select("text")
        .node()
        .getBBox().height;
      xAxisDraw.attr(
        "transform",
        "translate(0, " + (height + labelHeight * data.length) + ")"
      );

      // Position the axis text

      xAxisDraw
        .selectAll("text")
        .attr("y", function(d, i) {
          return -(i * labelHeight + labelHeight);
        })
        .attr("dx", "-0.15em")
        .attr("dy", "1.15em")
        .style("text-anchor", "start");

      // Draw the axis lines
      xAxisDraw
        .selectAll("line")
        .attr("y1", function(d, i) {
          return -(i * labelHeight + labelHeight);
        })
        .attr("y2", function(d, i) {
          return -(
            i * labelHeight +
            labelHeight +
            (data.length - 1 - i) * labelHeight +
            height
          );
        });

      // Build vis
      // Sun and planets

      var gPlanets = svg
        .insert("g", ".listener-rect")
        .attr("class", "planet-group");
      var planets = gPlanets
        .selectAll(".planet")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "planet")
        .attr("id", function(d) {
          return d.planet;
        })
        .attr("cx", function(d) {
          return xScale(d.distance);
        })
        .attr("cy", 0)
        .attr("r", function(d) {
          d.scaledRadius = rScale(d.radius);
          return d.scaledRadius;
        })
        .attr("filter", "url(#soft-glow)"); // 7b)

      // Zoom
      // Cross-multiplication to get the minimum zoom so that the furthest away planet
      // (Pluto) just fits on the screen. 0.75 gives some leeway for the label.
      var minZoom = (1 / (chartWidth / window.innerWidth)) * 0.75;
      // Define the zoom behaviour
      var zoom = d3
        .zoom()
        .scaleExtent([minZoom, 20])
        .on("zoom", zoomed);
      // Listen for zoom events
      listenerRect.call(zoom);
      // Zoom function
      function zoomed() {
        // Get the transform
        var transform = d3.event.transform;
        // Lock at the Sun
        transform.x = Math.min(0, transform.x);
        // Re-scale the x scale
        var xScaleNew = transform.rescaleX(xScale);
        // Move the planets (semantic)
        planets
          .attr("cx", function(d) {
            return xScaleNew(d.distance);
          })
          .attr("r", function(d) {
            return d.scaledRadius * transform.k;
          });
        // Semantically zoom and pan the axis
        xAxis.scale(xScaleNew);
        xAxisDraw.call(xAxis);
        // Stagger the axis-labels
        xAxisDraw.selectAll("text").attr("y", function(d, i) {
          return -(i * labelHeight + labelHeight);
        });
        // Stagger the axis-lines
        xAxisDraw
          .selectAll("line")
          .attr("y1", function(d, i) {
            return -(i * labelHeight + labelHeight);
          })
          .attr("y2", function(d, i) {
            return -(
              i * labelHeight +
              labelHeight +
              (data.length - 1 - i) * labelHeight +
              height
            );
          });
      } // zoomed()
      // Initial programmatic zoom
      // set an initial transform object on the zoom element

      var initialTransform = d3.zoomIdentity.scale(20);
      listenerRect.call(zoom.transform, initialTransform);
      // Trigger programmatic zoom
      progZoom();
      // Programmatic zoom function
      function progZoom() {
        // real
        var zoomOutTransform = d3.zoomIdentity.translate(0, 0).scale(minZoom);

        listenerRect
          .transition()
          .duration(5000)
          .call(zoom.transform, zoomOutTransform)
          .on("end", zoomToNormal);
        function zoomToNormal() {
          listenerRect
            .transition()
            .duration(3000)
            .ease(d3.easeQuadInOut)
            .call(zoom.transform, d3.zoomIdentity);
        }
      }
    } // make()
    // Data load and visual

    function row(d) {
      return {
        planet: d.planet,
        distance: +d.distance,
        radius: +d.radius,
        text: d.text
      };
    }
    d3.csv("planets.csv")
      .then(data => {
        make(data);
      })
      .catch(error => console.error(error));
  });

  return (
    <div className="planet-zoom">
      <h1 id="headline">
        Measuring planetary
        <span id="distance-border">
          <a
            href="https://en.wikipedia.org/wiki/Solar_System#Distances_and_scales"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            distances
          </a>
        </span>
      </h1>

      <div id="vis"></div>
    </div>
  );
};

export default PlanetZoom;
