import React from 'react'

import Card from './components/Card.jsx'


const App = () => {
 
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45, // dollars per hour
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/eac0ojfclEtmmysy2zKJZ-NWugFwYvm0_kK6eJWJM_E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC10aG9z/ZS1pY29ucy1mbGF0/LXRob3NlLWljb25z/LzEyMDAvZXh0ZXJu/YWwtQW1hem9uLUxv/Z28tc29jaWFsLW1l/ZGlhLXRob3NlLWlj/b25zLWZsYXQtdGhv/c2UtaWNvbnMuanBn",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/5UJWwoRCg-WlbKhO6DdlLofG8JOlj0zlpkssDNsdS_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/Mjk3NjRiODdlYzc2/YjgyZmIyMWZjZTQu/cG5n",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/VEl3aMS074IZQQkN2i77qZvWyDRkzm3riKRj0GW7tCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzU5OC9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "7 weeks ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: 40,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/yZ6rcn4uPDIvmYoLznoSQVDuau9MCxLyQS0YpDEhWaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIwLzMz/Ni80NTEvbm9uXzJ4/L2luZm9zeXMtbG9n/by1pbmZvc3lzLWlj/b24tZnJlZS1mcmVl/LXZlY3Rvci5qcGc",
    companyName: "Infosys",
    datePosted: "4 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 25,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Za_thTcJvihjhP88Znfxph9LaUmOoo8iMQiwjeLRKi0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkLzY2/L2Y0LzNkNjZmNGEy/ZGI3MTUyZDQ3NTQy/MTQ4NGYyNzRiYWVl/LmpwZw",
    companyName: "TCS",
    datePosted: "6 weeks ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 30,
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Qok69xuJvL4l-_3VWduoC1hXNBgCqb5NctoNU_GRNKk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI4LzEvZmxpcGth/cnQtbG9nby1wbmdf/c2Vla2xvZ28tMjg0/NDIyLnBuZw",
    companyName: "Flipkart",
    datePosted: "10 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 50,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/z0wRPoQDKfg8iHykqMj5Cu-YgkV8VCUsRPWBPzy3oOw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAyL3pvbWF0by1s/b2dvLTAucG5n",
    companyName: "Zomato",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 28,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/JoHkXFcBb3xsjBFvfYIZN7RiD71dRKS7x4ZSNQUAuvM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9w/YXl0bS1jaXJjbGUt/bG9nby1oZC1wbmct/NzAxNzUxNjk0NzA2/NjE0em1obzU2dm9m/Zi5wbmc",
    companyName: "Paytm",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 48,
    location: "Noida, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return  <div key={idx}>
          <Card brandLogo={elem.brandLogo}
    companyName={elem.companyName}
    datePosted={elem.datePosted}
    post={elem.post}
    tag1={elem.tag1}
    tag2={elem.tag2}
    pay={elem.pay}
    location={elem.location} />
        </div>
      })}
    </div>
  )
  }


export default App