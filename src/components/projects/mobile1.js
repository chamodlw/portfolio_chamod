import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GitHub, LinkedIn, MedicalServicesOutlined, YouTube } from '@mui/icons-material';
import web_img1 from '../../images/bmi2.png';

// Sections in array format
const web1 = {
  avatar: <MedicalServicesOutlined />,
  title: "BMI Calculator",
  subheader: "Flutter App",
  image: web_img1,
  links: [
    {
      icon: <GitHub />,
      onClick: () => window.open('https://github.com/chamodlw/BMI')
    },
    {
      icon: <YouTube />,
      onClick: () => window.open('https://youtu.be/YoBMERlW-gg?si=1H1KITXVKMxlZbUR')
    },
    {
      icon: <LinkedIn />,
      onClick: () => window.open('')
    }
  ],
  features: [
    "Easy-to-use interface for calculating BMI.Input fields for height and weight.Instant results displaying BMI as OK, Low, or High based on calculations.Helpful tips for maintaining a healthy BMI.",
    "Description:This app provides a quick and simple way to calculate your Body Mass Index (BMI) by entering your height and weight. It instantly categorizes your BMI as OK, Low, or High, helping you understand your health status with ease.",
    ""
  ]
};

// ExpandMore button logic
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {web1.avatar}
          </Avatar>
        }
        title={web1.title}
        subheader={web1.subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={web1.image}
        alt="Project Image"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Flutter
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {web1.links.map((link, index) => (
          <IconButton key={index} aria-label={`link-${index}`} onClick={link.onClick}>
            {link.icon}
          </IconButton>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Key Features:</Typography>
          {web1.features.map((feature, index) => (
            <Typography key={index} sx={{ marginBottom: 2 }}>
              {feature}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
