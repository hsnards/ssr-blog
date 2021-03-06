import { fetchData } from '../utils/fetchData';
import { BaseURL } from '../utils/BaseURL';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MyCard from './../components/MyCard';
import NotFound from './../components/NotFound';


const Index = ({ posts }) => {
     const router = useRouter()
     useEffect(() => {
          router.push("/posts")
     },[])
     const handleSearch = (e) => {
        
          if (e.target.value !== "") {
               router.push(`/posts?userId=${e.target.value}`)
          }
          else {
               router.push('/posts')
          }
          
     }
     return (
          <>
               
                    <div className='w-full flex items-center justify-between px-16'>
                         <p className='pl-4'>   جستجو کاربر :</p>
                         <input type={"number"} onChange={handleSearch} className='px-4 py-2 rounded border outline-none grow' />
                    </div>
               <div className='flex flex-wrap justify-evenly pt-20 gap-2'>
               {posts.length ?
                    posts.map((item) => (
                         <MyCard
                              id={item.id}
                              userId={item.userId}
                              body={item.body}
                              title={item.title}
                              key={item.id}
                         />
                    )) : <NotFound />}
                    </div>
                    
          </>
     );
};

export default Index;
export async function getServerSideProps({query}) {
     let posts;
     console.log(query);
     if (query.userId) {
          posts  = await fetchData(`${BaseURL}/posts?userId=${query.userId}`);
     }
     else {
          posts = await fetchData(`${BaseURL}/posts`);
     }
     return {
          props: { posts }
     };
}
