import React from "react";
import product1 from "../../assets/product1.jpg";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  const blogs1 = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg: product1,
      content:
        "Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋",
      authorName: "John Doe",
      authorImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      authorDesc: "Web Developer",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
      content:
        "Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋",
      authorName: "John Doe",
      authorImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      authorDesc: "Web Developer",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
      content:
        "Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋",
      authorName: "John Doe",
      authorImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      authorDesc: "Web Developer",
    },
  ];

  if (!blogs) {
    return (
      <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">

<div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-center mt-4 space-x-3">
       <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
</div>
</div>
</div>

    )
  }
  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {blogs.data.map((blog) => {
            return (
              <Link to={`/blog/${blog.id}`}>
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                  <img
                    className="h-56 w-full object-cover"
                    src={`http://localhost:1337${blog.attributes.coverImg.data[0].attributes.url}`}
                    alt="blog"
                  />
                  <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">
                      {blog.attributes.blogTitle}
                    </h3>
                    <p className="text-gray-600 text-xl">
                      {blog.attributes.blogDesc}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
