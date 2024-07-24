export default function About(){

    return<div className="p-4">
        
        <p className="font-bold text-4xl text-rose-600 text-center my-6 ">Our Aim</p>
        <div className="flex flex-col space-y-8 items-center justify-center">
            <p className="font-semibold">We are providing an interface to the women candidates to register for two profiles</p>
            

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Profile Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Profile Description
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Apply Link
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-rose-600 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Devi Shakti
                </th>
                <td class="px-6 py-4">
                For girls in age group of 10-18 to learn business fundamentals and explore enterprenurship
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-blue-500 cursor-pointer">
                    Apply Now
                </td>
               
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-rose-600 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Mahila Shakti
                </th>
                <td class="px-6 py-4">
                For women above age 18 to register and raise investment if they have an business idea
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-blue-500 cursor-pointer">
                    Apply Now
                </td>
                
            </tr>
          
        </tbody>
    </table>
</div>

        </div>
        
        </div>
}