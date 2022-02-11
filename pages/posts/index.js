import MyCard from '../../components/MyCard';
import { fetchData } from '../../utils/fetchData';
import { BaseURL } from '../../utils/BaseURL';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NotFound from '../../components/NotFound';
import { motion } from 'framer-motion';
const Index = ({ posts }) => {
    
     const container = {
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.2
            }
          }
        };
     const router = useRouter();
     useEffect(() => {
          router.push('/posts');
     }, []);
     const handleSearch = (e) => {
          if (e.target.value !== '') {
               router.push(`/posts?userId=${e.target.value}`);
          } else {
               router.push('/posts');
          }
     };
     return (
          <>
               <div className="w-full flex items-center justify-between px-4 md:px-16">
                    <p className="pl-4"> جستجو کاربر :</p>
                    <input
                         type={'number'}
                         onChange={handleSearch}
                         className="px-4 py-2 rounded border outline-none grow"
                    />
               </div>
               <motion.div initial="hidden"
    animate="visible" variants={container} className="flex flex-wrap justify-evenly pt-20 gap-2">
                    {posts.length ? (
                         posts.map((item) => (
                              <MyCard
                                   id={item.id}
                                   userId={item.userId}
                                   body={item.body}
                                   title={item.title}
                                   key={item.id}
                              />
                         ))
                    ) : (
                         <NotFound />
                    )}
               </motion.div>
          </>
     );
};

export default Index;
export async function getServerSideProps({ query }) {
     let posts;
     if (query.userId) {
          posts = await fetchData(`${BaseURL}/posts?userId=${query.userId}`);
     } else {
          posts = await fetchData(`${BaseURL}/posts`);
     }
     return {
          props: { posts }
     };
}
