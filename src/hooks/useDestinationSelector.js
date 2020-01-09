import { useState } from 'react';

function useDestinationSelector(currentDestination) {
  const [destination, setDestination] = useState(currentDestination);

  return destination;
}