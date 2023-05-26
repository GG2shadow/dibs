export default function Home() {
  return (  
    <section class="bg-gray-50 dark:bg-gray-900 h-screen md:flex md:items-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <a href="../" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-32 mr-2" src="talentport-logo.png" alt="logo"/>  
                </a>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The sky isn&apos;t the limit either.</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Talentport matches highly-motivated talents who wants to work remotely to overseas companies who are equally hungry for growth.</p>
                <a href="https://talentport.com/apply?utm_source=null&utm_medium=null&utm_campaign=null" class="text-tp-primary dark:text-tp-primary hover:underline font-medium text-lg inline-flex items-center">Read more about Talentport
                    <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
            <div>
                <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                        Sign in to Dibs
                    </h2>
                    <form class="mt-8 space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. name@email.com" required/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" required/>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 text-tp-primary bg-gray-100 border-gray-300 rounded focus:ring-tp-primary dark:focus:ring-tp-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                            </div>
                            <div class="ml-3 text-sm">
                            <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                            </div>
                            <a href="#" class="ml-auto text-sm font-medium text-tp-primary hover:underline dark:text-tp-primary">Lost Password?</a>
                        </div>
                        <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-tp-primary rounded-lg hover:bg-tp-primary focus:ring-4 focus:ring-tp-primary sm:w-auto dark:bg-tp-primary dark:hover:bg-tp-primary dark:focus:ring-tp-primary">Login to your account</button>
                        <div class="text-sm font-medium text-gray-900 dark:text-white">
                            Not registered yet? <a href="create-account" class="text-tp-primary hover:underline dark:text-tp-primary">Create account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
