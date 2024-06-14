export default function Page() {
    return (
        <>
            <div className="w-full h-auto p-2">
                <div className="w-full h-auto p-2 bg-[#d0d6d6] border-2 border-red-300 text-sm text-justify">
                    ১। নির্ধারিত সময়ে Dual to Death শুরু হবে। কোনো অনাকাঙ্ক্ষিত কারণে বিলম্ব করলে opposition Fighter তার এক্সাম শুরু করে mark gain করতে পারবে।
                    <br /><br />
                    ২। D2D একবার শুরু হলে অনির্দিষ্ট সময়কাল পর্যন্ত চলতে পারে। এক্ষেত্রে একজন সুনির্দিষ্ট মার্কে এগিয়ে থাকলে D2D combat শেষ হয়ে যাবে। এগিয়ে থাকা Fighter তাৎক্ষণিক D2D winner হিসেবে লিডারবোর্ডে চলে আসবে।
                    <br /><br />
                    ৩। কোনো ফাইটার Battle Ground পরিত্যাগ করতে চাইলে ‘Surrender like Looser’ ক্লিক করবে। এক্ষেত্রে নিজে তাৎক্ষণিক পরাজিত হিসেবে পরিগনিত হবে। Opposition Fighter বিজিত হবে এবং লিডারবোর্ডে চলে আসবে।
                    <br /><br />
                    ৪। ব্যাটলগ্রাউন্ডে সার্বক্ষণিক স্কোর, স্পিড, মার্কের ডিফারেন্স দেখানো হবে। যেন D2D ফাইটার সার্বক্ষণিক সেদিকে খেয়াল রেখে এগিয়ে যেতে পারে।
                    <br /><br />

                    <strong>
                        <u>Special Notes</u>: যেকোনো মুহুর্তে ইন্টারফেস চলে গেলে, হোম মেনু থেকে rejoin করা যাবে। এক্ষেত্রে যেখানে D2D combat যেখানে থেমে গেছে, সেখান থেকেই শুরু হবে। নিয়মিত D2D উইনার এবং সর্বোচ্চ মার্কধারী মাস শেষে MediGambit থেকে বিশেষ পুরষ্কার পাবে। [Conditions is changable]
                    </strong>
                </div>
            </div>
        </>
    );
}