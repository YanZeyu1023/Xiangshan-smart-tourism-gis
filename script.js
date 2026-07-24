// ======================================
// Xiangshan Smart Tourism GIS Platform
// Leaflet + Carto + Filter System
// ======================================


// Create Map

const map = L.map("map", {

    zoomControl: true

}).setView(
    [29.477, 121.877],
    10
);



// ======================================
// Carto Voyager Map
// ======================================


L.tileLayer(

    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",

    {

        subdomains:[
            "a",
            "b",
            "c",
            "d"
        ],

        maxZoom:19,

        attribution:
        "&copy; OpenStreetMap contributors &copy; CARTO"

    }

).addTo(map);




// ======================================
// Xiangshan Tourism Data
// ======================================


const tourismPlaces = [


{
name:"象山影视城",
type:"Attraction",
category:"Cultural Tourism",
description:"Film and television tourism destination.",
lat:29.425,
lng:121.863,
rating:5
},


{
name:"松兰山旅游度假区",
type:"Attraction",
category:"Coastal Tourism",
description:"Beach tourism area.",
lat:29.477,
lng:121.956,
rating:4
},


{
name:"石浦古镇",
type:"Attraction",
category:"Historical Tourism",
description:"Ancient fishing town.",
lat:29.197,
lng:121.947,
rating:5
},


{
name:"中国渔村",
type:"Attraction",
category:"Fishing Culture",
description:"Fishing culture attraction.",
lat:29.173,
lng:121.944,
rating:4
},


{
name:"花岙岛",
type:"Attraction",
category:"Island Tourism",
description:"Island geological landscape.",
lat:29.055,
lng:121.976,
rating:5
},



{
name:"石浦海鲜街",
type:"Food",
category:"Seafood",
description:"Local seafood restaurants.",
lat:29.196,
lng:121.946,
rating:5
},


{
name:"象山海鲜大排档",
type:"Food",
category:"Seafood",
description:"Popular seafood dining area.",
lat:29.485,
lng:121.869,
rating:4
},


{
name:"爵溪海鲜市场",
type:"Food",
category:"Market",
description:"Fresh seafood market.",
lat:29.475,
lng:121.912,
rating:4
},



{
name:"象山开元名都大酒店",
type:"Hotel",
category:"Accommodation",
description:"Hotel near Xiangshan city center.",
lat:29.476,
lng:121.869,
rating:5
},


{
name:"石浦大酒店",
type:"Hotel",
category:"Accommodation",
description:"Hotel near Shipu town.",
lat:29.195,
lng:121.946,
rating:4
},



{
name:"象山客运中心",
type:"Transportation",
category:"Transport",
description:"Main transportation hub.",
lat:29.480,
lng:121.870,
rating:4
},


{
name:"石浦汽车站",
type:"Transportation",
category:"Transport",
description:"Shipu transport station.",
lat:29.205,
lng:121.947,
rating:4
}


];




// ======================================
// Marker System
// ======================================

// ======================================
// Different GIS Layer Icons
// ======================================


const attractionIcon = L.icon({

    iconUrl:
    "https://cdn-icons-png.flaticon.com/512/854/854878.png",

    iconSize:[
        35,
        35
    ]

});


const foodIcon = L.icon({

    iconUrl:
    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",

    iconSize:[
        35,
        35
    ]

});


const hotelIcon = L.icon({

    iconUrl:
    "https://cdn-icons-png.flaticon.com/512/139/139899.png",

    iconSize:[
        35,
        35
    ]

});


const transportIcon = L.icon({

    iconUrl:
    "https://cdn-icons-png.flaticon.com/512/61/61212.png",

    iconSize:[
        35,
        35
    ]

});

let markers=[];



function showMarkers(data){


    // remove old markers

    markers.forEach(marker=>{

        map.removeLayer(marker);

    });


    markers=[];



    // create new markers

    data.forEach(place=>{


        let icon;


if(place.type==="Attraction"){

    icon = attractionIcon;

}


else if(place.type==="Food"){

    icon = foodIcon;

}


else if(place.type==="Hotel"){

    icon = hotelIcon;

}


else if(place.type==="Transportation"){

    icon = transportIcon;

}



let marker = L.marker(

    [

        place.lat,

        place.lng

    ],

    {

        icon:icon

    }

)

.addTo(map);



        marker.bindPopup(`

            <h3>
            ${place.name}
            </h3>


            <p>
            Type:
            ${place.type}
            </p >


            <p>
            Category:
            ${place.category}
            </p >


            <p>
            ${place.description}
            </p >


            <p>
            Rating:
            ${"⭐".repeat(place.rating)}
            </p >


        `);



        markers.push(marker);


    });

}



// Initial display

showMarkers(tourismPlaces);





// ======================================
// Filter Function
// ======================================


window.filterMarkers = function(type){


    if(type==="All"){


        showMarkers(tourismPlaces);


    }

    else{


        let filteredPlaces =

        tourismPlaces.filter(place=>{


            return place.type===type;


        });



        showMarkers(filteredPlaces);


    }


};





// ======================================
// Fix Map Display
// ======================================


setTimeout(()=>{


    map.invalidateSize();


},500);
// ======================================
// GIS Data Dashboard
// ======================================


function updateDashboard(){


    let total =
    tourismPlaces.length;



    let attractions =
    tourismPlaces.filter(

        place =>
        place.type==="Attraction"

    ).length;



    let food =
    tourismPlaces.filter(

        place =>
        place.type==="Food"

    ).length;



    let hotels =
    tourismPlaces.filter(

        place =>
        place.type==="Hotel"

    ).length;



    let transport =
    tourismPlaces.filter(

        place =>
        place.type==="Transportation"

    ).length;




    document.getElementById(
        "total"
    ).innerHTML = total;



    document.getElementById(
        "attractionCount"
    ).innerHTML = attractions;



    document.getElementById(
        "foodCount"
    ).innerHTML = food;



    document.getElementById(
        "hotelCount"
    ).innerHTML = hotels;



    document.getElementById(
        "transportCount"
    ).innerHTML = transport;


}



updateDashboard();

// ======================================
// Smart Recommendation Algorithm
// ======================================



window.recommend = function(){


    let interest =

    document.getElementById(
        "interest"
    ).value;



    let result =

    document.getElementById(
        "result"
    );



    let recommendations = [];



    tourismPlaces.forEach(place=>{


        let score = 0;



        // Category matching

        if(
            interest==="All"
            ||
            place.type===interest
        ){

            score += 50;

        }



        // Rating score

        score += place.rating * 10;



        recommendations.push({

            name:
            place.name,

            score:
            score

        });


    });




    recommendations.sort(

        (a,b)=>

        b.score-a.score

    );




    let output =

    "<h3>Recommended Places:</h3>";




    recommendations
    .slice(0,3)
    .forEach(item=>{


        output +=

        `<p>
        ⭐ ${item.name}
        <br>
        Score:
        ${item.score}
        </p >`;



    });




    result.innerHTML = output;



};
// ======================================
// Smart Route Recommendation
// ======================================


window.generateRoute = function(){



    let route = `


    <h3>
    Recommended 2-Day Xiangshan Route
    </h3>


    <h4>
    Day 1: Coastal & Culture
    </h4>


    <p>
    1. 松兰山旅游度假区
    <br>
    ↓
    <br>
    2. 石浦古镇
    <br>
    ↓
    <br>
    3. 石浦海鲜街
    </p >



    <h4>
    Day 2: Nature & Entertainment
    </h4>


    <p>
    1. 中国渔村
    <br>
    ↓
    <br>
    2. 花岙岛
    <br>
    ↓
    <br>
    3. 象山影视城
    </p >



    `;



    document.getElementById(

        "routeResult"

    ).innerHTML = route;



};
// ======================================
// GIS Distance Calculation
// Haversine Formula
// ======================================


window.calculateDistance = function(){



    const start = {

        lat:29.477,

        lng:121.877

    };



    let destination;



    let value =

    document.getElementById(

        "destination"

    ).value;




    if(value==="songlan"){


        destination={

            lat:29.477,

            lng:121.956

        };


    }



    else if(value==="shipu"){


        destination={

            lat:29.197,

            lng:121.947

        };


    }



    else if(value==="film"){


        destination={

            lat:29.425,

            lng:121.863

        };


    }



    else if(value==="fish"){


        destination={

            lat:29.173,

            lng:121.944

        };


    }




    function haversine(lat1,lon1,lat2,lon2){


        const R = 6371;


        const dLat =

        (lat2-lat1)

        *

        Math.PI/180;



        const dLon =

        (lon2-lon1)

        *

        Math.PI/180;



        const a =

        Math.sin(dLat/2)**2

        +

        Math.cos(lat1*Math.PI/180)

        *

        Math.cos(lat2*Math.PI/180)

        *

        Math.sin(dLon/2)**2;



        const c =

        2*Math.atan2(

            Math.sqrt(a),

            Math.sqrt(1-a)

        );



        return R*c;


    }




    let distance =

    haversine(

        start.lat,

        start.lng,

        destination.lat,

        destination.lng

    );



    document.getElementById(

        "distanceResult"

    ).innerHTML = `


    <h4>
    Distance:
    ${distance.toFixed(2)}
    km
    </h4>


    <p>
    Estimated travel time:
    ${Math.round(distance*3)}
    minutes
    </p >


    `;


};