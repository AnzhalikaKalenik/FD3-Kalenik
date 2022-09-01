import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="36" y="140" rx="0" ry="0" width="7" height="1" /> 
    <circle cx="139" cy="130" r="125" /> 
    <rect x="0" y="275" rx="10" ry="10" width="280" height="32" /> 
    <rect x="-3" y="318" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="425" rx="10" ry="10" width="95" height="30" /> 
    <rect x="145" y="292" rx="0" ry="0" width="2" height="11" /> 
    <rect x="123" y="417" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Sceleton