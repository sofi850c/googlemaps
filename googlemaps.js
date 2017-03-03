  map.addListener('center_changed', function () {

      window.setTimeout(function () {
          map.panTo(marker.getPosition());
      }, 3000);
  });

  marker.addListener('click', function () {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
  });
