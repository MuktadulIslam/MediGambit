"use client"
import { format, isToday, isPast } from 'date-fns';
import { useState } from 'react';
const dualtodeathData = [
    {
        inviterName: "শাওন আহমেদ",
        inviterCollegeName: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ",
        inviterRegiNumber: 2478903,
        inviterImage: '/imgs/profiles/profile11.jpeg',
        inviteeName: "রেহানা আক্তার",
        inviteeCollegeName: "ভিকারুন্নেসা নুন কলেজ, ঢাকা",
        inviteeRegiNumber: 2448903,
        inviteeImage: '/imgs/profiles/profile9.jpeg',
        dtdId: "296372332442",
        dtdTopicName: "Biology 2nd Paper",
        dtdTopicBgName: "জীববিজ্ঞান ২য় পত্র",
        dtdStartTime: "2024-06-14T07:42:07.312Z",
    },
    {
        inviterName: "রেহানা আক্তার",
        inviterCollegeName: "ভিকারুন্নেসা নুন কলেজ, ঢাকা",
        inviterRegiNumber: 2448903,
        inviterImage: '/imgs/profiles/profile9.jpeg',
        inviteeName: "শাওন আহমেদ",
        inviteeCollegeName: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ",
        inviteeRegiNumber: 2478903,
        inviteeImage: '/imgs/profiles/profile10.jpeg',
        dtdId: "296372332442",
        dtdTopicName: "Biology 2nd Paper",
        dtdTopicBgName: "জীববিজ্ঞান ২য় পত্র",
        dtdStartTime: "2024-06-14T17:30:00.000Z",
    },
    {
        inviterName: "শাওন আহমেদ",
        inviterCollegeName: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ",
        inviterRegiNumber: 2478903,
        inviterImage: '/imgs/profiles/profile3.jpeg',
        inviteeName: "রেহানা আক্তার",
        inviteeCollegeName: "ভিকারুন্নেসা নুন কলেজ, ঢাকা",
        inviteeRegiNumber: 2448903,
        inviteeImage: '/imgs/profiles/profile9.jpeg',
        dtdId: "296372332442",
        dtdTopicName: "Biology 2nd Paper",
        dtdTopicBgName: "জীববিজ্ঞান ২য় পত্র",
        dtdStartTime: "2024-06-19T07:42:07.312Z",
    },
    {
        inviterName: "শাওন আহমেদ",
        inviterCollegeName: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ",
        inviterRegiNumber: 2478903,
        inviterImage: '/imgs/profiles/profile11.jpeg',
        inviteeName: "রেহানা আক্তার",
        inviteeCollegeName: "ভিকারুন্নেসা নুন কলেজ, ঢাকা",
        inviteeRegiNumber: 2448903,
        inviteeImage: '/imgs/profiles/profile9.jpeg',
        dtdId: "296372332442",
        dtdTopicName: "Biology 2nd Paper",
        dtdTopicBgName: "জীববিজ্ঞান ২য় পত্র",
        dtdStartTime: "2024-06-20T07:42:07.312Z",
    },
    {
        inviterName: "রেহানা আক্তার",
        inviterCollegeName: "ভিকারুন্নেসা নুন কলেজ, ঢাকা",
        inviterRegiNumber: 2478903,
        inviterImage: '/imgs/profiles/profile9.jpeg',
        inviteeName: "শাওন আহমেদ",
        inviteeCollegeName: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ",
        inviteeRegiNumber: 2448903,
        inviteeImage: '/imgs/profiles/profile11.jpeg',
        dtdId: "296372332442",
        dtdTopicName: "Biology 2nd Paper",
        dtdTopicBgName: "জীববিজ্ঞান ২য় পত্র",
        dtdStartTime: "2024-06-22T07:42:07.312Z",
    },
]

export default function Page() {
    const [dualToDeathList, setDualToDeathList] = useState(dualtodeathData);

    return (<>
        <div className="w-full h-5 flex justify-center mt-1.5">
            <button className="h-full w-40 md:w-48 bg-[#b64748] text-white text-xs md:text-sm font-sans font-medium flex justify-center items-center rounded-full shadow-sm shadow-white">
                INVITE for LIVE COMBAT
            </button>
        </div>

        <div className="w-full h-auto space-y-2 mt-2">
            {dualToDeathList.map((dtd, index) => (
                <div key={index} className="w-full h-24 md:h-28 bg-[#43acb0]  flex p-1 md:p-1.5 shadow-md shadow-gray-600">
                    <div className="w-1/3 flex-1 h-full flex flex-col items-center">
                        <img src={dtd.inviterImage} alt="" className="h-[65%] aspect-square rounded-full object-cover" />
                        <div className="mt-1 w-full h-4 text-[12px] md:text-[13px] text-center font-medium whitespace-nowrap overflow-hidden">
                            {dtd.inviterName}
                        </div>
                        <div className="w-full h-2.5 md:h-3 text-[9px] md:text-[10px] text-center whitespace-nowrap overflow-hidden">
                            {dtd.inviterCollegeName}
                        </div>
                    </div>

                    <div className="w-32 sm:w-36 md:w-40 flex-none h-full flex flex-col items-center z-10">
                        <div className="h-5 max-w-[140%] sm:max-w-[160%] md:max-w-[180%] text-white text-sm md:text-base whitespace-nowrap overflow-hidden font-medium">
                            {dtd.dtdTopicBgName ? dtd.dtdTopicBgName : dtd.dtdTopicName}
                        </div>
                        <img src="/imgs/icons/dtd-icon.png" alt="" className="mt-1 w-1/3 max-w-8 h-auto object-cover" />

                        {isPast(new Date(dtd.dtdStartTime)) ?
                            (<button className="w-[90%] h-6 md:h-7 mt-2 flex justify-center items-center rounded-full bg-gradient-to-r from-[#afa2a3] to-[#707778] text-sm md:text-base text-white font-sans font-semibold">
                                Start Combat
                            </button>) :
                            (<div className="w-[90%] h-6 md:h-7 mt-2 flex justify-center items-center rounded-full bg-gradient-to-r from-[#afa2a3] to-[#707778] text-sm md:text-base text-white font-sans font-semibold">
                                {isToday(dtd.dtdStartTime) ? format(dtd.dtdStartTime, 'hh:mm a') : format(dtd.dtdStartTime, 'dd MMMM')}
                            </div>)
                        }
                    </div>

                    <div className="w-1/3 flex-1 h-full flex flex-col items-center">
                        <img src={dtd.inviteeImage} alt="" className="h-[65%] aspect-square rounded-full object-cover" />
                        <div className="mt-1 w-full h-4 text-[12px] md:text-[13px] text-center font-medium whitespace-nowrap overflow-hidden">
                            {dtd.inviteeName}
                        </div>
                        <div className="w-full h-2.5 md:h-3 text-[9px] md:text-[10px] text-center whitespace-nowrap overflow-hidden">
                            {dtd.inviteeCollegeName}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>)
}