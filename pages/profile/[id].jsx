import axios from "axios";
import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Order from "../../components/profile/Order";

function Profile({ session }) {
    const [tabs, setTabs] = useState(0);
    const { push } = useRouter();

    const handleSignOut = () => {
        if (confirm("Are you sure you want to sign out?")) {
            signOut({ redirect: false });
            toast.success("Sign out successful");
            push("/auth/login");
        }
    };

    useEffect(() => {
        if (!session) {
            push("/auth/login");
        }
    }, [session, push]);

    return (
        <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
            <div className="lg:w-80 w-100 flex-shrink-0">
                <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
                    <Image
                        src="/images/client1.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className='w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg'
                    />
                    <b className='text-2xl'>Jessica Jones</b>
                </div>
                <ul className="text-center font-semibold">
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(0)}>
                        <i className="fa-solid fa-house"></i>
                        <button className='ml-1'>Account</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(1)}>
                        <i className="fa-solid fa-lock"></i>
                        <button className='ml-1'>Password</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(2)}>
                        <i className="fa-solid fa-truck-fast"></i>
                        <button className='ml-1'>Orders</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
                        onClick={handleSignOut}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <button className='ml-1'>Exit</button>
                    </li>
                </ul>
            </div>
            {tabs === 0 && <Account />}
            {tabs === 1 && <Password />}
            {tabs === 2 && <Order />}
        </div>
    )
}

export async function getServerSideProps({ req, params }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }

    const user = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
    );

    return {
        props: {
            session,
        },
    };
}

export default Profile