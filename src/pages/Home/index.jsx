import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Typography,
  MainFeatured,
  FeaturedPost,
} from "../../components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
export default function () {
  const featured = [
    {
      id:0,
      title: "Computer Hardware System",
      date: "Feb 1",
      description:
        "Create a content in your site about computer / desktop build system, and laptop.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:1,
      title: "Number System",
      date: "Feb 8",
      description:
        "Create a content in your site about number systems and its applications in computing.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:2,
      title: "Data Formats",
      date: "Feb 8",
      description:
        "Create a content in your site about data formats, and its different technologies applied for.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:3,
      title: "Operating Systems",
      date: "Feb 8",
      description:
        "Create a content in your site about Operating Systems, and its different platform technologies applied for.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:4,
      title: "Computing Platforms",
      date: "Feb 15",
      description:
        "Platforms that offer computing capabilities in areas such as cloud computing and virtualization by building on top of operating systems. Consider a cloud computing platform that allows you to scale your services as required by adding and removing virtual machines.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:5,
      title: "Mobile and Games Platforms",
      date: "Feb 15",
      description:
        "Mobile platforms provide operating systems and development environments for mobile applications. Cloud systems for developing mobile backends that offer services to mobile users are also included. This may include specialized APIs for location services and voice recognition, which are useful for mobile app developers. Backends for mobile games and massively multiplayer online games are examples of environments that are designed for operating game services. 3D game engines, AR, and VR APIs are examples of such facilities.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:6,
      title: "Storage Platforms",
      date: "Feb 22",
      description:
        "Platforms for scalable object and file storage, including APIs and value-added features such as scalable storage with multiple backups.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:7,
      title: "Database Platforms",
      date: "Feb 22",
      description:
        "Platforms for deploying and maintaining various database types, including relational, NoSQL, and in-memory databases, in a local, corporate server, even in the cloud.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:8,
      title: "Application Platforms",
      date: "Mar 8",
      description:
        "Application platforms are environments and development tools for designing and delivering applications, a type of software primarily intended for human use. A framework that allows developers to create complex web applications by executing code and integrating with databases, frameworks, and APIs, for example.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:9,
      title: "Web Platforms",
      date: "Mar 15",
      description:
        "Web servers, web application servers, content delivery networks, and edge computing are examples of platforms that offer applications that are useful to websites and web-based apps as a service.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:10,
      title: "Content Management Systems",
      date: "Mar 15",
      description:
        "Content, media, and document publishing and management platforms. These are often used as an intranet site and document management system within organizations. They're also used to publish web content like a newspaper, blog, or corporate website.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:11,
      title: "Analytics",
      date: "Mar 29",
      description:
        "Data capture, editing, analysis, and visualization services. Tools for ingesting, encoding, querying, and handling big data may be included.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:12,
      title: "AI Platforms",
      date: "Mar 29",
      description:
        "Voice synthesis services and tools for creating your own AI, such as a machine learning API, are examples of AI-based services. This may also include machine learning-optimized environments for running your AI, such as a machine learning database.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:13,
      title: "Media Platforms",
      date: "Apr 12",
      description:
        "Tools such as video transcoding, downloading, and acknowledgement are available on platforms for media publishing and research.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:14,
      title: "Internet of Things",
      date: "Apr 12",
      description:
        "Computer operating systems and cloud platforms with specialized APIs for internet of things in areas like device management, IoT protection, and analytics are examples of internet of things platforms.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:15,
      title: "Security",
      date: "Apr 19",
      description:
        "Firewalls, identity and access protection, directory services, licenses, enforcement monitoring, encryption, key management, and threat detection are examples of security services.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id:16,
      title: "Finals: Website of Different Computer System Platforms",
      date: "Apr 26",
      description:
        "Website of Different Computer System Platforms.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
  ];

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small" title="Subscribe" />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          title="Renzo Blog"
          sx={{ flex: 1 }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" title=" Sign up" />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
      <Container maxWidth="lg">
        <MainFeatured
          title="Title of a longer featured blog post"
          image="https://source.unsplash.com/random"
          imageText="main image description"
          linkText="Continue reading…"
          description="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
        />
        <Grid container spacing={4}>
          {featured.map((post) => (
            <FeaturedPost
              key={post.title}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
              imageLabel={post.imageLabel}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
