import district_name_data from "../../../../data/allDistrictName.json"
import allProfileUrlData from "../../../../data/allProfileUrls.json"

export default function Page() {
    return (<>
        <div className="w-full h-auto mt-8 sm:mt-10">
            <div className="w-80 mx-auto h-8 bg-white text-base font-semibold text-gray-800 rounded-full flex justify-center items-center">তোমার সম্পর্কে জানতে চাই!</div>

            <form action="" className="mt-4 md:mt-6 px-5 md:px-8 space-y-2 *:w-full *:h-8 *:rounded-md *:bg-white *:text-center *:shadow-sm *:shadow-gray-300 text-gray-600 *:outline-none">
                <input defaultValue={""} type="text"  className="focus:border-2 focus:border-gray-700" placeholder="নাম" required />
                <input defaultValue={""} type="text" className="focus:border-2 focus:border-gray-700" placeholder="কলেজ" required />
                <select defaultValue={""} className="focus:border-2 focus:border-gray-700">
                    <option value="" disabled>
                        বর্ষ
                    </option>
                    {Array.from({ length: 2029 - 2020 }, (_, i) => 2020 + i).map((session) => (
                        <option key={session} value={session}>
                            {session}
                        </option>
                    ))}
                </select>
                <input defaultValue={""} type="text" className="focus:border-2 focus:border-gray-700" placeholder="ফোন নাম্বার" required />
                <select defaultValue={""} className="focus:border-2 focus:border-gray-700">
                    <option value="" disabled> বর্তমানে অবস্থানরত জেলা </option>
                    {district_name_data.district_names.map((district_name, index) => (
                        <option key={index} value={district_name.bangle}>
                            {`${district_name.bangle} (${district_name.english})`}
                        </option>
                    ))}
                </select>
            </form>

            <div className="w-full h-auto mt-5 px-1.5">
                <div className="w-full h-auto p-2 bg-[#44b3b7] rounded-lg">
                    <div className="mb-2 w-80 mx-auto h-8 bg-[#7e7e7e] text-base font-medium text-gray-100 rounded-full flex justify-center items-center">
                        কোন অ্যাভাটারে নিজেকে প্রকাশ করতে চাও?
                    </div>
                    <div className="w-full h-auto grid grid-cols-4 gap-2 sm:gap-2 pc:gap-3">
                        {allProfileUrlData.profiles.map((profile_url, index) => (
                            <div key={index} className="h-16 pc:h-20 w-full flex justify-center items-center">
                                <img src={profile_url} alt="" className="h-full aspect-square object-cover rounded-full shadow-md shadow-gray-600" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-8  px-5 md:px-8 mt-3">
                <button type="submit" className="h-full w-full bg-gradient-to-r from-gray-300 rounded-full to-yellow-100 flex justify-center items-center pc:text-lg font-semibold">Submit</button>
            </div>
        </div>
    </>)
}