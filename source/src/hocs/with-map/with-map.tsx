import * as leaflet from 'leaflet';
import {Marker} from '@root/consts/consts';
import * as React from 'react';
import {SettingMap} from '@root/types';

type Map = {
  setView: (coordinate: Array<number>, zoom: number) => void;
  removeLayer: (element) => void;
  remove: () => void;
}

const withMap = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  return class WithMap extends React.PureComponent<T, {}> {
    props: T;
    state: {};
    private mapRef: React.RefObject<HTMLElement>;
    private settingMap: SettingMap;
    private markers: Array<object> | null;
    private _leafletMap: Map | null;

    constructor(props) {
      super(props);

      this.mapRef = React.createRef();
      this.settingMap = this.props.settingMap;
      this.markers = null;
    }

    componentDidUpdate() {
      const markers: Array<object> = this.markers;

      this.settingMap = this.props.settingMap;
      this._leafletMap.setView(this.settingMap.cityCoordinates, this.settingMap.zoom);

      markers.map((item) => this._leafletMap.removeLayer(item));

      this._createMarkers();
    }
    componentWillUnmount() {
      this._leafletMap.remove();
      this.markers.map((item) => this._leafletMap.removeLayer(item));
    }
    componentDidMount() {
      this._createMap(this.settingMap);
      this._createMarkers();
    }
    _createMap(setting) {
      this._leafletMap = leaflet.map(this.mapRef.current, {
        zoomControl: true,
        marker: true
      });
      this._leafletMap.setView(setting.cityCoordinates, setting.zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.htmlacademy.ru">Htmlacademy</a>`
        })
        .addTo(this._leafletMap);
    }
    _createMarkers() {
      const {coordinates, activeCoordinate} = this.props;

      this.markers = coordinates.map((coordinate) => {
        const icon = coordinate === activeCoordinate ? leaflet.icon(Marker.ACTIVE) : leaflet.icon(Marker.REGULAR);
        return leaflet.marker(coordinate, {icon}).addTo(this._leafletMap);
      });
    }

    render() {
      return (
        <Component
          ref={this.mapRef}
        />
      );
    }
  };
};

export default withMap;
