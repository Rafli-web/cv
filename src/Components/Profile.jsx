import { Card } from "flowbite-react"
import kucing from "../assets/kucing.jpeg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="96"
                        src={kucing}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Rafli Saepull Azhar</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
                </div>
                <div className="coloumn py-4 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone +62 831-9020-8290</h4>
                    <h5>Email :azharrafli200@gmail.com</h5>
                    <h5>Github: github.com/rafli-web</h5>
                    <h5>Linkedin: linkedin.com/in/rafli-web</h5>
                </div>
            </div>
        </Card>
    )
}

export default Profile