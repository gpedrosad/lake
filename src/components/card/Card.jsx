// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import PropTypes from 'prop-types';


// export default function MultiActionAreaCard({title, description, image}) {
//   return (
//     <Card sx={
//       { 
//         width: '60%',
//         height:'100%', 
//         margin: '2% 40% 30% 20%', 
//         justifyContent: 'center', 
//         display: 'flex', 
//         alignItems: 'center', 
//         flexDirection: 'column'
//      }
//      }>
//       <CardActionArea sx={{display:'flex', flexDirection:'column'}}>
//         <CardMedia
//           component="img"
//           height="140"
//           image={image}
//           alt="card image"
//         />
//         <CardContent sx={
//           {
//             backgroundColor:'#3C5220',
//             color:'white',
//             display:'flex',
//             justifyContent:'center',
//             flexDirection:'column',
//             alignItems:'center',
//             padding:'5% 10% 15% 10%',
//             '&:hover': {
//               backgroundColor: '#273812',
//             },

//           }
          
//           }>
//           <Typography gutterBottom variant="h5" component="div" >
//             {title}
//           </Typography>
//           <Typography variant="body2" color="white" sx={{textAlign:'justify', padding:'5%'}}>
//             {description}
//           </Typography>

//           <CardActions>
//         <Button size="small" color="primary" sx={{border: 'white solid', color: 'white', whiteSpace:'nowrap', width:'100%', alignItems:'center', fontSize:'0.8rem' }}>
//           Discover our location
//         </Button>
//       </CardActions>
//         </CardContent>

//       </CardActionArea>

//     </Card>
//   );
// }

// MultiActionAreaCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-action-area">
        <img src={image} alt="card image" className="card-media" />
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <p className="card-description">{description}</p>
          <div className="card-actions">
            <button className="card-button">Discover our location</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
 