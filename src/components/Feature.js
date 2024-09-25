import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column feature">
    {blok.name}
    <h1>Elon musk</h1>
  </div>
);

export default Feature;
