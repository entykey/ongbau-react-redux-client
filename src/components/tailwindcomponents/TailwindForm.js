
// study source: https://www.geeksforgeeks.org/tailwind-css-border-radius/
const TailwindForm = () => {
    return (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div class="max-w-md mx-auto">

                        {/* form title */}
                        <div class="flex items-center space-x-5">
                            <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 class="leading-relaxed">Form title</h2>
                                <p class="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <form class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium text-gray-700">
                                        Gender</label>
                                    <select id="country" name="country" autocomplete="country"
                                        class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                                        <option>Male</option>
                                        <option>female</option>
                                        <option>other</option>
                                    </select>
                                </div>

                                <div class="flex flex-col">
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                                    <select id="countries" class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>

                                <div class="flex flex-col">
                                    <label class="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                    <input class="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Price in VND" type="number" min="1000" max="100000" step="500" x-model="charsLength"></input>
                                </div>

                                <div class="flex flex-col">
                                    <label class="leading-loose">Event Title</label>
                                    <input type="text" class="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Event title"></input>
                                </div>

                                <div class="flex flex-col">
                                    <label class="leading-loose">Event Subtitle</label>
                                    <input type="text" class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Optional"></input>
                                </div>

                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Start</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"></input>
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="leading-loose">End</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020"></input>
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Event Description</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"></input>
                                </div>
                            </div>

                            <div class="text-center mt-6">
                                <button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Add</button>
                                {/* <p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"> Sign In</span>
                                </p> */}
                            </div>

                            <div class="pt-4 flex items-center space-x-4">
                                <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                </button>
                                <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TailwindForm;