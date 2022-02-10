import { fetchData } from '../../utils/fetchData';
import { BaseURL } from '../../utils/BaseURL';
import Image from 'next/image';
const Internal = ({ data, user, photo }) => {
     return (
          <>
               <div className="flex flex-col max-w-[600px] mx-auto  shadow rounded-md px-4 py-4 ">
                    <div className="w-full flex flex-wrap justify-between items-center ">
                         <h1 className="font-bold text-lg md:text-xl order-2 md:order-1">{data.title}</h1>
                         <div className="flex items-center justify-end md:justify-start w-full order-1  md:order-2 md:w-fit">
                              <p className=" text-gray-400 text-xs pl-1 md:pl-4 md:text-sm">
                                   {user.name}
                              </p>
                              <Image
                                   className="rounded-full border"
                                   src={user.avatar}
                                   width={40}
                                   height={40}
                              />
                         </div>
                    </div>
                    <div className="w-full pt-5">
                     <Image blurDataURL={"/loader.svg"} placeholder="blur" src={photo.url} width={600} height={600} />
                    </div>
                    <div>
                         <p className="text-sm font-normal antialiased pb-4 pt-2 text-slate-500/75">
                              {data.body}
                         </p>
                    </div>
               </div>
          </>
     );
};
export default Internal;

export async function getServerSideProps({ params }) {
     const data = await fetchData(`${BaseURL}/posts/${params.id}`);
     const photo = await fetchData(`${BaseURL}/photos/${params.id}`);
     const user = await fetchData(`${BaseURL}/users/${data.userId}`);

     return {
          props: { data, user, photo }
     };
}
