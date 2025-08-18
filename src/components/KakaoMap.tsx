"use client";

import { useEffect, useRef, memo } from "react";
import { useKakaoMap } from "./context/kakao-map-context";



interface KakaoMapProps {
  latitude: number;
  longitude: number;
}

function KakaoMap({ latitude, longitude }: KakaoMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { isLoaded } = useKakaoMap();

  useEffect(() => {
    if (isLoaded) {
      window.kakao.maps.load(() => {
        if (mapContainer.current) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 4, // 확대 레벨
          };
          const map = new window.kakao.maps.Map(
            mapContainer.current,
            mapOption
          );

          // 확대 축소 컨트롤 생성
          const zoomControl = new window.kakao.maps.ZoomControl();
          map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

          // 다른 컨트롤들은 비활성화
          map.setDraggable(false);
          map.setZoomable(true); // 확대/축소는 가능하도록 설정
          map.setKeyboardShortcuts(false);

          // 마커 생성
          const markerPosition = new window.kakao.maps.LatLng(
            latitude,
            longitude
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        }
      });
    }
  }, [isLoaded, latitude, longitude]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
}

export default memo(KakaoMap);
