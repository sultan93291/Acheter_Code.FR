
export const Image = ({Src, AltTxt, className , dataAos}) => {
  return (
    <img src={Src} alt={AltTxt} className={className} data-aos={dataAos} />
  )
}
