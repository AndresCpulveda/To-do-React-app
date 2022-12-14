import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => {
  return (
    <ContentLoader
      speed={1.5}
      width={400}
      height={615}
      viewBox="0 0 300 680"
      backgroundColor="#493871"
      foregroundColor="#1d1a47"
      {...props}
    > 
      <rect x="4" y="1" rx="0" ry="0" width="3" height="450" />
      <rect x="4" y="450" rx="0" ry="0" width="294" height="3" />
      <rect x="296" y="1" rx="0" ry="0" width="3" height="450" />
      <rect x="5" y="1" rx="0" ry="0" width="294" height="3" />
      <rect x="22" y="20" rx="0" ry="0" width="129" height="23" />
      <rect x="35" y="76" rx="4" ry="4" width="81" height="9" />
      <rect x="271" y="22" rx="4" ry="4" width="18" height="18" />
      <rect x="186" y="76" rx="4" ry="4" width="81" height="9" />
      <rect x="150" y="63" rx="0" ry="0" width="2" height="44" />
      <rect x="6" y="104" rx="0" ry="0" width="144" height="3" />
      <rect x="152" y="106" rx="0" ry="0" width="145" height="1" />
      <rect x="28" y="127" rx="4" ry="4" width="243" height="31" />
      <rect x="62" y="188" rx="4" ry="4" width="148" height="19" />
      <circle cx="39" cy="197" r="10" />
      <circle cx="39" cy="247" r="10" />
      <circle cx="39" cy="297" r="10" />
      <circle cx="39" cy="347" r="10" />
      <rect x="64" y="237" rx="4" ry="4" width="148" height="19" />
      <rect x="65" y="287" rx="4" ry="4" width="148" height="19" />
      <rect x="64" y="337" rx="4" ry="4" width="148" height="19" />
      <circle cx="39" cy="400" r="10" />
    </ContentLoader>
  )
}

Loader.metadata = {
  name: 'Arfath Tade', // My name
  github: 'arfath77', // Github username
  description:
    'Global sidebar with tabs containig search bar and list of options', // Little tagline
  filename: 'Loader', // filename of your loader
}

export default Loader

