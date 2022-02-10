import Image from "next/image";

const NotFound = () => {
    return (
        <div className="flex items-center pr-4">
            <p className="text-sm md:text-lg font-bold text-gray-700/75"> اوه چه بد! کاربری با این شماره نداریم :(</p>
            <Image src={"/404.png"} width={500} height={500} alt={"404"}/>
        </div>
    );
}

export default NotFound;