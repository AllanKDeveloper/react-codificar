import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const ProjectCard01 = props => (
  <Card className={"MuiProjectCard--01"} id={props.id} data-text={props.text} onClick={props.toggle}>
    <div className={"MuiCard__head"}>
      <Avatar
        className={"MuiAvatar-root"}
        src={
          "http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png"
        }
      />
      <Typography
        className={"MuiTypography--headLabel"}
        variant={"overline"}
        gutterBottom
      >
        {props.valor}
      </Typography>
    </div>
    <Divider className={"MuiDivider-root"} light />
    <CardContent className={"MuiCardContent-root"}>
      <Typography className={"MuiTypography--titulo"} variant="overline" display="block">
        Cliente
      </Typography>
      <Typography
        className={"MuiTypography--overline"}
        variant={"overline"}
        gutterBottom
      >
        {props.customer}
      </Typography>
      <Typography className={"MuiTypography--titulo"} variant="overline" display="block">
        Vendedor
      </Typography>
      <Typography
        className={"MuiTypography--heading"}
        variant={"h5"}
        gutterBottom
      >
        {props.seller}
      </Typography>
    </CardContent>
  </Card>
);

ProjectCard01.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiProjectCard--01": {
        transition: "0.3s",
        width: 300,
        margin: '15px',
        borderRadius: 16,
        padding: muiBaseTheme.spacing.unit * 3,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        display: 'inline-grid',
        cursor: 'pointer',
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        "& .MuiCard__head": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& .MuiAvatar-root": {
            width: 60,
            height: 60,
            backgroundColor: "#ffffff",
            transform: "translateY(50%)"
          },
          "& .MuiTypography--headLabel": {
            color: muiBaseTheme.palette.grey[500]
          }
        },
        "& .MuiDivider-root": {
          marginLeft: -muiBaseTheme.spacing.unit * 3,
          marginRight: -muiBaseTheme.spacing.unit * 3
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: 0,
          paddingTop: muiBaseTheme.spacing.unit * 6,
          "& .MuiTypography--overline": {
            fontSize: 16,
            fontWeight: "bold",
            color: muiBaseTheme.palette.grey[500]
          },
          "& .MuiTypography--titulo": {
            lineHeight: '0px'
          },
          "& .MuiTypography--heading": {
            fontWeight: 900
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          }
        }
      }
    }
  }
});

ProjectCard01.displayName = "Card";
ProjectCard01.metadata = {
  name: "Project Card",
  description: "Widely used in Dashboard UI"
};

export default ProjectCard01;
