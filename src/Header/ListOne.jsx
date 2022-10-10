export const ListOne = ({li, index, current, currentTime}) => {
  let listStyle = {
    transform: 'translateY(40px)',
    opacity: 0,
    transition: 'all .2s linear'
  }

  if(index === current) {
    switch(currentTime) {
      case 13:
      case 14:
      case 15:
      case 16:
        listStyle = {
          transform: 'translateY(-40px)',
          opacity: 0,
          transition: 'all .2s linear'
        }
        break

      case 17:
      case 18:
        listStyle = {
          transform: 'translateY(40px)',
          opacity: 0,
          transition: 'all .2s linear'
        }
        break

      default:
        listStyle = {
          transform: 'translateY(0px)',
          opacity: 1,
          transition: 'all .2s linear'
        }
        break
    }
  }
  /* if(currentTime === 18 ) console.log(currentTime) */
  return (<h2 style={listStyle}>{li}</h2>)
}