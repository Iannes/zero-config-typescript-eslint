const globalTSContent = `
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const content: string | undefined
  export default content
}

declare module "*.png";
declare module "*.jpg";
`

exports.globalTSContent = globalTSContent
