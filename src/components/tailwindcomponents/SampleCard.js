const SampleCard = () => {
    return (
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div class="relative flex flex-col items-center rounded-[20px] w-max-content max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-5 pb-8 transition duration-200 linear">
                <div class="relative mb-3 flex items-center justify-between pt-1 w-full">
                    
                    {/* Title */}
                    <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        Sample Card
                    </h4>

                    {/* 3 dot button */}
                    <button
                        class='flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg'
                    >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                    </button>
                </div>
                <div class="flex flex-col">
                    <div class="mt-3 flex items-center gap-3">
                        <input
                            type="checkbox"
                            class='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-brand-500 dark:checked:bg-brand-400'
                            name="weekly"
                            id="checkbox1"
                        />
                        <label
                            for="checkbox1"
                            class="text-base font-medium text-navy-700 dark:text-white"
                        >
                            Item comment notifications
                        </label>
                    </div>

                    <div class="mt-4 flex items-center gap-3">
                        <input
                            type="checkbox"
                            class='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-brand-500 dark:checked:bg-brand-400'
                            name="weekly" id="checkbox2" />
                        <label
                            for="checkbox2"
                            class="text-base font-medium text-navy-700 dark:text-white"
                        >
                            Buyer review notifications
                        </label>
                    </div>

                    <div class="mt-4 flex items-center gap-3">
                        <input
                            type="checkbox"
                            class='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-brand-500 dark:checked:bg-brand-400'
                            name="weekly" id="checkbox3" />
                        <label
                            for="checkbox3"
                            class="text-base font-medium text-navy-700 dark:text-white"
                        >
                            Rating reminders notifications
                        </label>
                    </div>

                    <div class="mt-4 flex items-center gap-3">
                        <input
                            type="checkbox"
                            class='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-brand-500 dark:checked:bg-brand-400'
                            name="weekly" id="checkbox4" />
                        <label
                            for="checkbox4"
                            class="text-base font-medium text-navy-700 dark:text-white"
                        >
                            Meetups near you notifications
                        </label>
                    </div>

                    
                    
                    
                </div>
            </div><p class="font-normal text-navy-700 mt-20 mx-auto w-max">Notifications Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" class="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>
        </div>
    )
}
export default SampleCard;