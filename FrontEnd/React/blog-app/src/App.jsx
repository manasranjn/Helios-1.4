import React from "react";
import Blog from "./Components/Blog";
import Data from "./Components/Data";
import StudentDetails from "./Components/StudentDetails";
import NewsCard from "./Components/NewsCard";

const App = () => {
  const newsBlogs = [
    {
      title: "India's Digital Economy Continues to Grow",
      content:
        "India's digital economy is expanding rapidly, with businesses and consumers increasingly adopting digital payments, online services, and cloud technologies.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      category: "Business",
      date: "2026-09-15",
    },
    {
      title: "New Technology Trends Shaping the Future",
      content:
        "Artificial intelligence, cloud computing, robotics, and advanced automation are transforming industries and creating new opportunities for businesses.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology",
      date: "2026-09-16",
    },
    {
      title: "Scientists Discover New Way to Study Space",
      content:
        "Researchers have introduced new techniques that could help scientists better understand distant galaxies, stars, and other objects in deep space.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
      category: "Science",
      date: "2026-09-17",
    },
    {
      title: "Local Startups Attract New Investments",
      content:
        "Several emerging startups are receiving investments as entrepreneurs develop innovative solutions across technology, education, healthcare, and finance.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      category: "Business",
      date: "2026-09-18",
    },
    {
      title: "Major Improvements Announced for Public Transport",
      content:
        "Authorities have announced plans to improve public transportation infrastructure with better connectivity, modern facilities, and technology-driven services.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
      category: "Politics",
      date: "2026-09-19",
    },
    {
      title: "New Smartphone Technology Gets Global Attention",
      content:
        "The latest generation of smartphones is introducing improved cameras, faster processors, longer battery life, and advanced artificial intelligence features.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      category: "Technology",
      date: "2026-09-20",
    },
    {
      title: "Healthy Lifestyle Trends Gain Popularity",
      content:
        "More people are focusing on balanced diets, regular exercise, quality sleep, and preventive wellness as part of their daily routines.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      category: "Health",
      date: "2026-09-21",
    },
    {
      title: "Young Entrepreneurs Build Innovative Businesses",
      content:
        "A growing number of young entrepreneurs are launching businesses based on technology, creativity, and solutions to everyday problems.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      category: "Business",
      date: "2026-09-22",
    },
    {
      title: "Education Sector Adopts More Digital Tools",
      content:
        "Schools and educational institutions are increasingly using digital platforms, interactive learning tools, and online resources to support students.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      category: "Education",
      date: "2026-09-23",
    },
    {
      title: "New Renewable Energy Projects Announced",
      content:
        "Several renewable energy projects are being developed to increase clean energy production and reduce dependence on traditional energy sources.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      category: "Environment",
      date: "2026-09-24",
    },
    {
      title: "Indian Athletes Prepare for Upcoming Competitions",
      content:
        "Athletes across different sports are intensifying their training as they prepare for major national and international competitions.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      category: "Sports",
      date: "2026-09-25",
    },
    {
      title: "Artificial Intelligence Changes Modern Workplaces",
      content:
        "Businesses are increasingly using artificial intelligence to automate repetitive tasks, analyze information, and improve productivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      category: "Technology",
      date: "2026-09-26",
    },
    {
      title: "Tourism Industry Sees Growing Interest",
      content:
        "Travel destinations are seeing increased interest as travelers explore new cultural experiences, natural attractions, and local communities.",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      category: "Travel",
      date: "2026-09-27",
    },
    {
      title: "Global Markets Show Strong Activity",
      content:
        "Financial markets remain active as investors closely monitor economic indicators, company performance, and developments in the global economy.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      category: "Finance",
      date: "2026-09-28",
    },
    {
      title: "New Environmental Initiative Focuses on Cleaner Cities",
      content:
        "A new initiative aims to improve urban environments through better waste management, green spaces, recycling, and sustainable infrastructure.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      category: "Environment",
      date: "2026-09-29",
    },
    {
      title: "Online Learning Platforms Add New Courses",
      content:
        "Popular online learning platforms are expanding their course libraries to help students and professionals develop technical and career-oriented skills.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      category: "Education",
      date: "2026-09-30",
    },
    {
      title: "Researchers Explore the Future of Space Travel",
      content:
        "Scientists and engineers are studying new technologies that could make future space missions more efficient and enable longer human exploration.",
      image: "https://images.unsplash.com/photo-1517976547714-720226b864c1",
      category: "Science",
      date: "2026-10-01",
    },
    {
      title: "Fitness Technology Becomes More Advanced",
      content:
        "Smartwatches and fitness devices are adding new features that help users track activity, exercise performance, sleep, and daily wellness.",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0",
      category: "Health",
      date: "2026-10-02",
    },
    {
      title: "New Sports Facilities Open for Young Players",
      content:
        "New sports facilities are providing young athletes with better access to training grounds, coaching programs, and modern sporting equipment.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      category: "Sports",
      date: "2026-10-03",
    },
    {
      title: "Festive Season Brings New Opportunities for Retailers",
      content:
        "Retail businesses are preparing for the festive season with new products, promotional campaigns, online shopping options, and improved customer experiences.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      category: "Business",
      date: "2026-10-03",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      {/* <Blog
        title="voluptate et itaque vero tempora molestiae"
        content="eveniet quo quis nlaborum totam consequatur non dolor nut et est nrepudiandae nest voluptatem vel debitis et magnam"
        author="Leanne Graham"
      />
      <Blog title="Title 2" content="Content 2" author="Leanne Graham" />
      <Blog title="Title 3" content="Content 3" author="Leanne Graham" /> */}

      {/* <Data data={{ name: "hari", age: 20 }} />
      <Data data={[1, 2, 3]} /> */}

      {/* <StudentDetails
        data={{ name: "hari", age: 20, course: "B.Tech", mark: 80 }}
      /> */}

      {newsBlogs.map((blog, i) => (
        <NewsCard blog={blog} key={i} />
      ))}
    </div>
  );
};

export default App;
