import Link from 'next/link';
import { motion } from 'framer-motion';
const MyCard = ({ id, title, userId, body }) => {
     const item = {
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1
          }
     };
     return (
          <>
               <motion.div variants={item} className="w-96 flex-col flex border px-4 py-2 rounded-sm">
                    <span className="text-gray-400 text-sm pb-2">
                         شماره: {id}{' '}
                    </span>
                    <h5 className="font-bold text-lg pb-1 ">{title}</h5>
                    <span className="text-green-600/75 text-sm pb-2">
                         کاربر: {userId}
                    </span>
                    <p className="text-sm font-normal antialiased pb-4">
                         {body.substring(0, 50) + '...'}
                    </p>
                    <div className="w-full flex justify-end">
                         <Link href={`posts/${id}`} passHref>
                              <button className="transition uppercase shadow bg-blue-50 hover:bg-blue-500 hover:text-white focus:shadow-outline focus:outline-none text-blue-500 text-xs   py-3 px-10 rounded">
                                   بیشتر
                              </button>
                         </Link>
                    </div>
               </motion.div>
          </>
     );
};

export default MyCard;
