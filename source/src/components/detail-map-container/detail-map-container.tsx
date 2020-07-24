import * as React from 'react';

export const WrappedComponent = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
    function CitiesMapContainer(props, ref) {
      return (
        <section className="property__map map" id="map" ref={ref}/>
      );
    }
);

