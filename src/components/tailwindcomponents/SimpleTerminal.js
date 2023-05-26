const SimpleTerminal = () => {
    return(
        <div class="w-full">
  <div class="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
      <div class="top mb-2 flex">
          <div class="h-3 w-3 bg-red-500 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div class="mt-4 flex">
          <span class="text-green-400">ASP.NET Core:~$</span>
          <p class="flex-1 typing items-center pl-2">
              Hi, happy coding! 
              {/* <br /> */}
          </p>
      </div>
  </div>
</div>
    );
}
export default SimpleTerminal;