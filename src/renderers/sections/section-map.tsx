// "use client";

// import type { MapBlock } from "@/payload-types";

// import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
// import { useEffect, useId, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import "leaflet-defaulticon-compatibility";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// export function SectionMap({ afterText, beforeText, centerLatitude, centerLongitude, heading, locations }: MapBlock) {
//   const id = useId();
//   const [mounted, setMounted] = useState<boolean>(false);
//   useEffect(() => setMounted(true), []);
//   return (
//     // <div className="w-11/12 max-w-screen-lg mx-auto flex flex-col gap-8">
//     // <h2 className="text-xl mb-0 lg:text-2xl tracking-wider uppercase font-serif">{heading}</h2>
//     <AspectRatio ratio={16 / 9}>
//       {mounted && (
//         <MapContainer
//           center={[centerLatitude!, centerLongitude!]}
//           className="w-full h-full"
//           scrollWheelZoom={false}
//           zoom={13}
//         >
//           <TileLayer
//             // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {locations.map((l) => (
//             <Marker key={l.id + id + "marker"} position={[l.latitude!, l.longitude!]}>
//               <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       )}
//     </AspectRatio>
//     // </div>
//   );
// }
