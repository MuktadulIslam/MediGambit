"use client"
import { useRef } from "react"
import district_name_data from "../../../../data/allDistrictName.json"
import allProfileUrlData from "../../../../data/allProfileUrls.json"
import { useRouter } from 'next/navigation'

export default function Page() {
    const name = useRef("");
    const collegeName = useRef("");
    const educationYear = useRef("");
    const mobileNumber = useRef("");
    const district = useRef("");
    const profileAvatarNumber = useRef(1);

    const router = useRouter()
    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(name.current)
        // console.log(collegeName.current)
        // console.log(educationYear.current)
        // console.log(mobileNumber.current)
        // console.log(district.current)

        router.push('/')
    }
    return (<>
        <div className="w-full h-auto mt-8 sm:mt-10">
            <div className="w-80 mx-auto h-8 bg-white text-base font-semibold text-gray-800 rounded-full flex justify-center items-center">তোমার সম্পর্কে জানতে চাই!</div>

            <form onSubmit={handleSubmit} className="mt-4 md:mt-6 *:text-center text-gray-600 *:outline-none flex flex-col items-center">
                <input defaultValue={""} required
                    type="text"
                    className="shadow-sm shadow-gray-300 focus:border-2 mb-2 focus:border-gray-700 w-[90%] h-8 rounded-md bg-white"
                    placeholder="নাম"
                    onChange={(e) => { name.current = e.target.value }}
                />

                <input defaultValue={""} required
                    type="text"
                    className="shadow-sm shadow-gray-300 focus:border-2 mb-2 focus:border-gray-700 w-[90%] h-8 rounded-md bg-white"
                    placeholder="কলেজ"
                    onChange={(e) => { collegeName.current = e.target.value }}
                />

                <select defaultValue={""} required
                    className="shadow-sm shadow-gray-300 focus:border-2 mb-2 focus:border-gray-700 w-[90%] h-8 rounded-md bg-white"
                    onChange={(e) => { educationYear.current = e.target.value }}
                >
                    <option value="" disabled>
                        বর্ষ
                    </option>
                    {Array.from({ length: 2029 - 2020 }, (_, i) => 2020 + i).map((session) => (
                        <option key={session} value={session}>
                            {session}
                        </option>
                    ))}
                </select>

                <input defaultValue={""} required
                    type="text" name="phone"
                    className="shadow-sm shadow-gray-300 focus:border-2 mb-2 focus:border-gray-700 w-[90%] h-8 rounded-md bg-white"
                    placeholder="ফোন নাম্বার"
                    onChange={(e) => { mobileNumber.current = e.target.value }}
                />

                <select defaultValue={""} required
                    className="shadow-sm shadow-gray-300 focus:border-2 mb-2 focus:border-gray-700 w-[90%] h-8 rounded-md bg-white"
                    onChange={(e) => { district.current = e.target.value }}
                >
                    <option value="" disabled> বর্তমানে অবস্থানরত জেলা </option>
                    {district_name_data.district_names.map((district_name, index) => (
                        <option key={index} value={district_name.bangle}>
                            {`${district_name.bangle} (${district_name.english})`}
                        </option>
                    ))}
                </select>


                <div className="w-full h-auto mt-5 px-1.5">
                    <div className="w-full h-auto p-2 bg-[#44b3b7] rounded-lg">
                        <div className="mb-2 w-80 mx-auto h-8 bg-[#7e7e7e] text-base font-medium text-gray-100 rounded-full flex justify-center items-center">
                            কোন অ্যাভাটারে নিজেকে প্রকাশ করতে চাও?
                        </div>
                        <div className="w-full h-auto grid grid-cols-4 gap-2 sm:gap-2 pc:gap-3">
                            {allProfileUrlData.profiles.map((profile_url, index) => (
                                <div key={index} className="h-16 pc:h-20 w-full flex justify-center items-center">
                                    <input type="radio" id={`profile-avatar-no${index}`}
                                    name="profile-avatar"
                                    className="peer hidden"
                                    defaultChecked={index === 0}
                                    />
                                    <label htmlFor={`profile-avatar-no${index}`} className="h-full aspect-square rounded-full shadow-md shadow-gray-600 peer-checked:ring-offset-0 peer-checked:ring-4 peer-checked:ring-[#ffb937]">
                                        <img src={profile_url} alt="" className="h-full aspect-square object-cover rounded-full" />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full h-8  px-5 md:px-8 mt-3">
                    <button type="submit" className="h-full w-full bg-gradient-to-r from-gray-300 rounded-full to-yellow-100 flex justify-center items-center pc:text-lg font-semibold">Submit</button>
                </div>
            </form>
        </div>
    </>)
}