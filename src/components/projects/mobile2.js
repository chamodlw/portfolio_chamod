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
import { GitHub, LinkedIn, YouTube } from '@mui/icons-material';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import web_img1 from '../../images/chat3.png';

// Sections in array format of chatbot
const web1 = {
  avatar: <ForumTwoToneIcon />,
  title: "AI Chatbot",
  subheader: "React-Native",
  image: web_img1,
  links: [
    {
      icon: <GitHub />,
      onClick: () => window.open('https://github.com/chamodlw/ai_chatbot.git')
    },
    {
      icon: <YouTube />,
      onClick: () => window.open('https://youtube.com/shorts/aePxKzuk8uI?si=oDsSaLez8bsNGVcu')
    },
    {
      icon: <LinkedIn />,
      onClick: () => window.open('https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_reactnative-aichatbot-mobiledevelopment-activity-7266485152216690689-Uxa8?utm_source=share&utm_medium=member_desktop')
    }
  ],
  features: [
    "This app combines advanced AI with cutting-edge features to deliver a highly interactive and accessible chat experience.", 
    "With text-to-audio conversion, you can listen to your conversations, making it convenient for on-the-go use.", 
    "Powered by the free Gemini API, the app offers intelligent and versatile support for your needs, ensuring productive and personalized interactions every time."
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
          React-Native
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
