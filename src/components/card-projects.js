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
import web_img1 from '../images/SW_project_L2.jpg';

// Sections in array format
const web1 = {
  avatar: <MedicalServicesOutlined />,
  title: "Medical Lab Management System",
  subheader: "Second Year Software Project",
  image: web_img1,
  links: [
    {
      icon: <GitHub />,
      onClick: () => window.open('https://github.com/chamodlw/SW_No.14_Frontend')
    },
    {
      icon: <YouTube />,
      onClick: () => window.open('https://youtu.be/RtacSBP3y1Q?si=jxBOoaLwE_CWasXo')
    },
    {
      icon: <LinkedIn />,
      onClick: () => window.open('https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_lims-medical-lab-information-management-activity-7235291488153133056-zaQx?utm_source=share&utm_medium=member_desktop')
    }
  ],
  features: [
    "LIMS supports multiple user roles, including patients, doctors, lab operators, assistants, and admins, to streamline lab operations. It offers online appointment scheduling, report tracking, and administrative management tools for efficient workflow.",
    "My Role: Team leader, focused on Patient and System Admin interfaces",
    "Supervisors: Mr. B.H. Sudhantha (Dean, Faculty of IT), Mr. Nisal Sudila (Mentor, Senior Software Engineer at IFS)"
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
          MERN Tech Stack
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
