
document.addEventListener('DOMContentLoaded', function() {
    console.log("加载完成")

    var elements = document.querySelectorAll('[data-type="1"],[data-type="2"]');
    let i=0;
    elements.forEach(function(item) {
        let dataType = item.getAttribute("data-type");
        if((dataType=="1" && item.innerHTML) || (dataType=="2" )){
            i++;
            let lon = item.getAttribute("data-longitude");
            let lat = item.getAttribute("data-latitude");
            let address = item.getAttribute("data-address");            
            let mapcontainer = document.createElement("div");
            mapcontainer.className="mapcontainer";
            var imgIcon = document.createElement('img');
            imgIcon.alt = '打开地图';
            imgIcon.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAvxJREFUWEfFV19IU2EUP9/+2KxGA1OzKCfEHoOCIA3DXsOXoHdbQe2hXnqVmBK++tSDReV871HqUUnSICiolxiB16JMU5ss3FzX3fgdOus69t17N+d2YOxyv2/f73d+58++o8hmiZkL0WLAN6Qsa4BIRYkIn3qYQWQZRMpQO8XRictvDDlUycOtub6ksmikHmguZxiWotTj/vlR7GMCDQS3c0s9ujQfV5Dd8vsWG+B5OYShlC+ubr/qmySi600gQJaikT0TaAt10Xp+uUb+1iwIQH7P2Q7AwVM3KHbkLOEZlt58z99T6bFqyRggYHmlD9B7Zx7y9oWVFyWwWOQctR04xoRAAmtezTMBAYe300tPS14LENYHu2+yMtWQ8EQAno2df84eD7+9xpiBQJDCrWEK+IOUK2zR760sv8c+2PjHu57C4YkAYg7vxj/cYc8PHwxTe6STTPMPmUWTQi2tlMlu0K/sBiuAMHlVwTOB3s4rJe97jp9mj39mVthbIbS89o3yhRyrAKIg4WaeCEjiQQEBW/z+edfZXUdPUH47xyoMxYY5IbHfzaomALnbIx30dXVp19knO7opX8izKnbCdSEAjyQEm+YaAUxiXh6CQ74IhwCVMv3lmRs+eVKgPLHsSYhqgMFz5MW+JGGl8gJwqCVEQX+QsrksVwQM8qMpSbm6SeCqAOSHV5PpBxSP3ecup5NWyvXJpyRdjSZoffuHayI6EkDcQQDxxGHwDP2gUnzte1GC0hmld+iUcCRQqZwkIUFiYfUldzt5B2B76SEcWHfqB44EdA0FUsNjqAKDt5VUkX1O+aAlINmskxDrdoXkL9kutfyHOIVBS0ASKjF3UZvIch9wupAgDOnMO23iaglU08+dSs0tDFoCE/2vOYEkzm71rFuXiwryoJJS2isZmIvEtYLL7wCs6R24kvXOEKmBvYLU+PuUatJQInxTzRxMSO0Ue5o2mmEowXzIBP5PxQ0ZTnki2jWcSkD+zYlJIiu6H+O5pdSszyxO2cfzvzQ3zcVT/aZBAAAAAElFTkSuQmCC';
            mapcontainer.appendChild(imgIcon);

            let gaodeMap = document.createElement("a");
            gaodeMap.href = "https://uri.amap.com/marker?position="+lon+","+lat;
            gaodeMap.target = "_blank";
            gaodeMap.className = "mapcontainer_gaode";
            gaodeMap.innerHTML = "打开高德地图";            
            mapcontainer.appendChild(gaodeMap);

            //高德坐标转变转为百度坐标
            var x = lon;
            var y = lat;
            var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI);
            var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI);
            var bd_lon = z * Math.cos(theta) + 0.0065;
            var bd_lat = z * Math.sin(theta) + 0.006;
            


            let baiduMap = document.createElement("a");
            baiduMap.href = "http://api.map.baidu.com/marker?location="+bd_lat+","+bd_lon+"&title="+address+"&output=html";
            baiduMap.target = "_blank";
            baiduMap.className = "mapcontainer_baidu";
            baiduMap.innerHTML = "打开百度地图";            
            mapcontainer.appendChild(baiduMap);

            var parentElement = item.parentNode;
            var index = Array.prototype.indexOf.call(parentElement.children, item);
            parentElement.insertBefore(mapcontainer, parentElement.children[index]);
        }
    });    
  });
