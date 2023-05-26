const TailwindInput = () => {
    return(
        <div class="mb-2">
            <label class="block text-xs font-semibold text-gray-500 mb-2">PASSWORD LENGTH</label>
            <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Length" type="number" min="1" max="30" step="1" x-model="charsLength"></input>
            {/* <input class="w-full" type="range" x-model="charsLength" min="1" max="30" step="1"></input> */}
        </div>
    )
}

export default TailwindInput;