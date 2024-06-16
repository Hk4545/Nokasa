import React from "react";

const Contact_section = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center mt-8 font-inter">
            <div className="w-[90%] flex flex-col md:flex-row gap-x-[2%] justify-center items-center md:items-start bg-[#FEFBF4] p-4">
                <div className="w-[90%] md:w-[49%] flex flex-col">
                    <div className="text-[44px] leading-[58px]">
                        Not fully convinced yet?
                    </div>
                    <div className="text-[18px] leading-[27px] mt-4">
                        If you have any doubts or questions, let's clear them up with a quick call. Simply provide us with your basic details, and we'll handle the rest.
                    </div>
                    <div className="hidden md:block mt-[90px]">
                        <svg width="120" height="150" viewBox="0 0 139 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7043 41.5886C14.0166 45.6829 15.7144 49.6116 17.9082 53.3174C16.1733 49.4075 14.4388 45.4981 12.7043 41.5886ZM14.2714 35.8741C14.9095 39.1528 22.4801 54.3352 24.792 57.0958C21.316 49.9298 17.2409 43.1735 14.2714 35.8741ZM16.1496 59.3705C14.0319 55.0369 11.9648 50.7248 10.5582 46.1398C10.0257 44.4053 9.56231 42.6517 9.04363 40.9141C8.92557 40.5202 8.88539 39.8598 8.35416 39.9498C7.7149 40.0577 8.12182 40.6566 8.12684 41.0507C8.1281 41.1579 8.1733 41.2647 8.20093 41.3714C9.85493 47.8147 12.6815 53.7522 16.1496 59.3705ZM53.6293 90.6139C55.1356 91.2086 55.9766 92.5767 57.0624 93.6305C60.5543 97.0195 64.1911 100.228 68.1472 103.073C69.3732 103.955 70.5217 104.858 70.918 106.432C71.0141 106.814 71.3032 107.878 71.8879 106.62C72.1343 106.091 72.4217 106.469 72.6727 106.627C75.0317 108.106 77.5256 109.42 79.6779 111.153C80.5951 111.89 81.6172 112.008 82.4797 112.558C85.0936 114.225 88.0857 115.043 90.8466 116.374C92.5148 117.178 94.4009 117.537 96.2584 118.117C96.0579 118.643 95.4287 118.132 95.3386 118.562C95.2597 118.94 95.5863 119.306 95.8566 119.298C96.9443 119.266 98.0557 120.159 99.1291 119.213C99.6014 118.796 100.248 119.048 100.391 119.43C100.63 120.073 100.653 120.599 101.336 119.763C101.395 119.689 101.532 119.678 101.633 119.639C102.358 121.71 103.793 119.95 104.847 120.228C107.609 120.956 110.473 121.087 113.268 121.78C115.28 122.278 117.597 122.279 119.827 122.16C121.39 122.077 123.082 122.078 124.651 122.454C125.532 122.665 126.39 122.859 127.26 122.724C128.441 122.541 128.767 123.381 129.244 124.114C129.836 125.022 128.917 125.053 128.522 125.385C127.805 125.987 128.28 126.857 128.198 127.53C127.845 130.414 125.61 131.25 123.496 132.017C120.08 133.254 116.435 133.376 112.83 133.524C101.387 133.991 90.4077 131.838 79.9069 127.418C70.0772 123.28 61.2573 117.483 53.1568 110.605C49.7674 107.727 46.7229 104.489 43.5399 101.398C40.9413 98.8736 38.3786 96.3419 36.0062 93.6144C32.1427 89.1719 28.415 84.6267 24.9716 79.8485C19.2532 71.914 13.8249 63.8058 9.66153 54.9383C7.47127 50.2741 5.98304 45.3749 5.15039 40.2896C5.00722 39.4199 4.94945 38.5385 5.11021 37.6584C5.227 37.0169 5.19058 36.1931 5.94285 35.9975C6.64113 35.8156 7.37205 36.0523 7.87692 37.0081C7.76514 35.3071 7.60815 33.7357 9.94285 34.2653C10.2907 34.3439 10.3523 34.0784 10.5293 33.8591C11.4499 32.7301 12.4081 32.7475 13.4409 33.8603C13.5823 33.489 13.0484 32.8983 13.7261 32.7425C14.1906 32.6341 14.3747 33.1114 14.5213 33.4516C16.1112 37.1452 17.9462 40.7202 19.7557 44.3093C23.0082 50.7634 26.5537 57.0334 30.5125 63.1C34.151 68.675 38.0395 74.0557 42.1053 79.3168C43.704 81.3858 45.5311 83.2809 47.433 85.1321C34.0986 69.4372 23.3684 52.1793 15.31 33.2946C16.2219 33.5251 16.3406 34.3538 16.6445 34.9719C24.0906 50.0957 32.4262 64.675 42.9255 77.9677C46.0289 81.8968 49.4148 85.5681 52.7611 89.2799C53.1377 89.698 53.464 90.1264 53.6884 90.637C52.9205 91.5269 52.7006 90.3267 52.5282 90.1647C51.0061 88.734 49.6029 87.1806 47.9277 85.4142C48.7141 87.5374 57.8846 96.7115 59.4597 97.0142C58.0857 96.1763 57.0386 94.9853 55.9628 93.8455C55.0547 92.8835 53.7017 92.1868 53.6293 90.6139Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.9241 79.9129C63.0105 78.1365 61.0584 77.642 60.7877 76.14C60.7438 75.8928 60.345 75.7868 60.0853 75.9514C59.7834 76.1435 59.6012 76.5902 59.8773 76.7779C61.0968 77.6034 61.4206 79.2664 62.9241 79.9129ZM60.2861 69.6563C57.7348 65.4705 54.9957 61.4054 52.769 57.0356C54.4385 61.7348 56.9683 65.9308 60.2861 69.6563ZM52.7879 47.5022C55.4675 56.8906 60.619 64.8817 66.9697 72.195C60.8465 64.7531 56.3824 56.3737 52.7879 47.5022ZM58.8494 74.2698C57.9467 72.8737 56.9219 71.5394 56.1727 70.067C55.319 68.3883 54.1312 66.9261 53.3366 65.1637C52.7307 63.8196 51.7425 62.3612 50.9641 60.9656C48.2884 56.1689 46.7327 50.9128 45.0559 45.7186C44.7737 44.8445 44.6615 43.9063 44.5692 42.9879C44.5406 42.6996 44.8364 42.3635 44.4645 42.1255C44.3555 42.0547 44.1313 42.0524 44.0181 42.1177C43.5901 42.3648 43.7041 42.7815 43.7779 43.1498C44.0964 44.7412 44.7994 46.3573 44.6785 47.9129C44.4847 50.4112 46.0876 52.1862 46.6619 54.3452C47.0733 55.893 48.3666 57.2121 48.4461 58.7093C48.5653 60.9595 49.9767 62.4047 50.8975 64.1829C51.7788 65.8858 53.4952 67.0699 54.1897 68.6802C55.2216 71.0719 56.6952 72.877 58.8494 74.2698ZM43.7293 39.7031C43.7565 38.8025 43.7579 38.0573 43.8094 37.316C43.8424 36.8425 43.7629 36.2767 44.409 36.091C44.9817 35.9253 45.1703 36.4026 45.4512 36.7241C45.6399 36.9409 45.8624 37.0867 46.17 37.0369C45.8373 35.3147 46.0252 35.1851 47.7923 35.1726C48.2213 35.1689 49.0477 35.8356 49.3735 34.6418C49.5295 34.0698 50.0205 34.7776 50.2118 35.0929C51.3627 36.9883 51.9655 39.1107 52.5041 41.2162C53.2569 44.1594 54.2488 47.026 55.2373 49.8833C57.4979 56.4172 61.1591 62.2114 65.2134 67.7907C67.7074 71.2236 70.5713 74.2884 73.8595 77.0081C70.3076 72.6462 66.1128 68.7768 63.2599 63.4911C64.3784 63.7484 64.6082 64.4965 64.9631 65.0168C68.558 70.2824 72.7768 74.9932 77.5982 79.1787C77.8097 79.3623 78.3328 79.466 77.9815 79.8852C77.074 80.9681 78.3161 81.4277 78.7407 81.7629C79.3651 82.255 80.13 83.3118 81.3124 82.1084C80.7618 84.6597 83.3872 84.3042 83.9948 85.7828C84.6317 84.9994 83.5883 84.7586 83.8187 84.0588C85.0007 84.8163 86.1196 85.6211 87.3225 86.274C88.0808 86.6862 86.533 87.1299 87.5301 87.6398C88.8995 88.3405 89.9933 89.5651 91.3532 90.2912C91.9844 90.6281 91.7461 91.2848 92.3844 91.593C92.5772 90.3175 93.0216 90.28 93.9972 91.0859C95.5284 92.35 97.296 93.24 99.2971 93.6657C100.649 93.9524 101.803 94.8604 103.204 95.0787C103.614 95.142 103.586 95.5354 103.668 95.8571C104.02 97.2473 104.702 97.5547 106.019 96.9491C107.245 96.3849 108.44 95.9079 109.829 96.6112C110.218 96.8084 110.365 96.9477 110.532 97.324C110.95 98.2662 112.64 98.2266 113.381 97.4265C114.35 96.3802 115.928 96.2037 117.034 96.3787C118.866 96.6673 120.087 95.6122 121.555 95.1471C122.31 94.9082 122.638 95.0793 123.084 95.5888C123.996 96.6305 122.74 97.0435 122.409 97.6003C122.124 98.0787 121.406 98.1958 122.046 98.961C122.361 99.3374 122.001 99.7838 121.656 100.1C120.756 100.928 120.079 102.215 118.471 101.615C118.446 101.607 117.433 101.356 117.816 102.293C117.94 102.596 117.348 103.132 116.837 103.241C114.472 103.747 112.313 104.995 109.831 105.11C109.258 105.137 108.72 105.482 108.706 104.549C108.703 104.335 108.702 104.011 108.421 104.069C108.187 104.118 107.796 104.448 107.826 104.559C108.143 105.721 107.217 105.654 106.732 105.448C105.377 104.871 104.022 105.628 102.719 105.302C100.653 104.785 98.4779 104.799 96.5738 103.428C95.8853 102.933 94.4212 103.214 93.2882 102.906C90.1996 102.065 87.4148 100.544 84.5336 99.2603C82.2859 98.2584 80.1892 96.9079 78.0468 95.6704C73.0723 92.7961 68.6517 89.2442 64.4676 85.3769C59.269 80.5716 54.9279 75.0121 51.0898 69.1405C46.9324 62.781 43.5968 55.9565 41.8329 48.4971C41.1459 45.5927 40.7029 42.6529 41.2744 39.6655C41.3812 39.1093 41.2007 38.2716 41.9764 38.1502C42.6584 38.0436 42.9709 38.7085 43.2379 39.2697C43.2968 39.3951 43.4586 39.4711 43.7293 39.7031Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.4645 34.1384C62.9995 34.2256 63.2423 34.5172 63.5021 34.7963C63.8107 35.1278 63.9229 35.9166 64.5522 35.5876C65.2044 35.2449 64.6 34.7353 64.4561 34.3091C64.4037 34.1533 64.2882 34.0162 64.249 33.8592C64.0761 33.1614 64.2079 32.7389 65.0528 33.0766C65.231 33.1477 65.5957 33.4081 65.5456 33.1838C65.0971 31.1887 66.7433 32.3015 67.3689 31.9376C68.6711 31.18 69.0626 32.552 69.824 33.023C71.9454 34.3365 73.3211 36.5708 75.7008 37.6146C76.6332 38.0239 76.5604 39.0243 76.0478 39.881C78.3074 39.9377 79.3334 41.8104 80.6976 43.1046C83.4409 45.7077 85.7031 48.9964 88.8265 50.9678C91.9948 52.9675 94.0889 55.8436 96.8153 58.1531L98.5301 61.0599C98.8804 61.4068 99.2031 61.788 99.5856 62.0949C101.665 63.7612 103.672 65.495 105.172 67.7242C105.484 68.188 106.294 68.5935 104.882 68.9345C104.335 69.0663 104.089 70.6736 103.831 71.6416C103.71 72.0983 103.661 72.6378 103.155 72.6165C101.412 72.5428 99.6701 73.2718 97.9322 72.074C93.4664 68.9964 89.248 65.6608 85.3042 61.9327C82.1798 58.9791 79.1978 55.9018 76.2226 52.8102C73.8283 50.3219 71.587 47.7174 69.4695 44.9763C67.36 42.2453 64.9296 39.7575 62.9753 36.8849C62.3951 36.0325 62.1998 35.22 62.4645 34.1384Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3534 35.4952C53.4158 39.2513 54.4897 43.338 55.6152 47.4077L55.2226 47.5381C53.9329 43.5237 52.6429 39.5092 51.3534 35.4952Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.1519 48.7641C57.4189 51.5746 58.6862 54.3857 59.9531 57.1963C57.8333 54.7604 56.8697 51.7992 56.1519 48.7641Z" fill="#F2B344"/>
                        </svg>
                    </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-[40px] md:mt-3">
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full flex justify-end -mt-6">
                            <svg width="70" height="65" viewBox="0 0 90 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2409_3241)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0295 15.8644C22.6565 16.0881 21.4828 16.7097 20.5083 17.6461C20.106 18.0321 19.9655 18.7529 20.4554 19.1182C22.0565 20.3125 21.7571 22.0137 21.6978 23.5882C21.3185 33.605 19.3112 43.3477 16.5723 52.9539C15.5732 56.4596 14.4386 59.9271 13.3863 63.4174C13.2436 63.8912 12.9195 64.3525 13.5143 64.875C14.1074 65.3965 14.4811 64.8127 14.9098 64.8291C18.1642 64.9556 18.8251 62.4125 19.8406 60.2166C24.9767 49.1111 27.3218 37.3877 27.5746 25.2049C27.6207 22.9755 27.4472 20.7557 26.7764 18.6175C26.3484 17.2554 25.6483 16.0761 24.0295 15.8644Z" fill="#172327"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5445 35.9289C51.1252 34.9585 50.5604 34.5819 49.6282 34.9317C48.7122 35.2752 48.2557 35.7513 48.236 36.8508C48.1937 39.2031 46.9568 41.1948 45.8679 43.1816C42.0349 50.1786 37.694 56.8701 33.4526 63.621C33.1189 64.1526 32.7436 64.6782 33.1135 65.4014C33.5626 66.282 34.1578 65.4514 34.6609 65.6064C36.3169 66.1163 37.143 64.9596 37.9694 63.8923C42.2588 58.3491 46.6827 52.8971 49.8279 46.5705C50.8596 44.495 51.8321 42.398 52.5907 40.2C52.9259 39.2277 52.2511 38.162 53.1018 37.1941C53.4483 36.8004 53.266 35.8594 52.7706 35.2684C52.5133 34.9612 52.2504 34.5611 51.821 34.7019C51.317 34.8668 51.6319 35.3787 51.5445 35.9289Z" fill="#172327"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M74.1094 50.9657C72.2173 51.0833 71.1167 51.8358 70.0902 53.1751C68.113 55.7553 65.2976 57.4081 62.5561 59.0811C58.9325 61.2937 55.1778 63.2568 51.2617 64.9138C50.2693 65.3332 49.3481 65.9351 48.4317 66.5125C48.0827 66.7322 47.6785 67.0443 48.0158 67.6046C48.29 68.0616 48.6441 68.0125 49.1298 68.0292C52.9186 68.159 56.0151 66.1219 59.2698 64.7248C63.7068 62.8201 67.9406 60.4746 71.6964 57.3699C73.0747 56.2304 74.292 54.9449 75.314 53.479C75.752 52.8505 76.0554 52.1994 75.6399 51.4148C75.1837 50.5545 74.5187 50.8222 74.1094 50.9657Z" fill="#172327"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2409_3241">
                            <rect width="74.8522" height="66.973" fill="white" transform="translate(0 19.373) rotate(-15)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <div className="w-[90%] -mt-4">
                            <div className="text-[20px] leading-[24px]">
                                Name
                            </div>
                            <div className="mt-2 w-full">
                                <input type="text" className="border px-[10px] py-[10px] w-full" placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div className="w-[90%] mt-6">
                            <div className="text-[20px] leading-[24px]">
                                Email
                            </div>
                            <div className="mt-2 w-full">
                                <input type="email" className="border px-[10px] py-[10px] w-full" placeholder="Enter your email"/>
                            </div>
                        </div>
                        <div className="w-[90%] mt-6">
                            <div className="text-[20px] leading-[24px]">
                                Message
                            </div>
                            <div className="mt-2 w-full">
                                <textarea type="text" className="border px-[10px] py-[10px] w-full h-24" placeholder="Enter your message"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6 flex justify-center">
                        <button className="w-[90%] bg-[#C5895F] text-[18px] leading-[24px] text-white py-[12px] text-center" onClick={() => {
                            alert("Booked successfully")
                        }}>
                            Book now
                        </button>
                    </div>
                    <div className="md:hidden w-full flex justify-start mt-2">
                    <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60549 11.8092C3.97811 12.9717 4.46021 14.0873 5.08314 15.1396C4.59052 14.0293 4.098 12.9193 3.60549 11.8092ZM4.05047 10.1865C4.23166 11.1175 6.38133 15.4286 7.03782 16.2124C6.05079 14.1776 4.89367 12.2592 4.05047 10.1865ZM4.58378 16.8583C3.98246 15.6278 3.39552 14.4034 2.99611 13.1015C2.84492 12.609 2.71332 12.111 2.56605 11.6176C2.53252 11.5058 2.52111 11.3183 2.37027 11.3438C2.18875 11.3745 2.3043 11.5445 2.30572 11.6564C2.30608 11.6869 2.31891 11.7172 2.32676 11.7475C2.79642 13.5771 3.59904 15.263 4.58378 16.8583ZM15.2262 25.7299C15.6539 25.8988 15.8927 26.2873 16.201 26.5865C17.1925 27.5488 18.2252 28.46 19.3485 29.2678C19.6967 29.5183 20.0228 29.7745 20.1353 30.2216C20.1626 30.3301 20.2447 30.6322 20.4107 30.2748C20.4807 30.1246 20.5623 30.232 20.6336 30.2767C21.3034 30.6967 22.0115 31.0699 22.6227 31.562C22.8831 31.7714 23.1733 31.8047 23.4183 31.9609C24.1605 32.4342 25.0101 32.6665 25.7941 33.0445C26.2677 33.2728 26.8033 33.3749 27.3307 33.5395C27.2738 33.6889 27.0951 33.5439 27.0695 33.6658C27.0471 33.7731 27.1399 33.8772 27.2166 33.8749C27.5255 33.8658 27.8411 34.1192 28.1459 33.8507C28.28 33.7323 28.4636 33.8039 28.5041 33.9123C28.5721 34.0949 28.5786 34.2443 28.7726 34.0067C28.7894 33.9859 28.8281 33.9827 28.8568 33.9715C29.0627 34.5598 29.4701 34.0599 29.7695 34.1389C30.5538 34.3457 31.3669 34.3829 32.1606 34.5795C32.732 34.721 33.3899 34.7213 34.023 34.6874C34.4669 34.6638 34.9472 34.6642 35.3929 34.7709C35.6429 34.8308 35.8866 34.886 36.1337 34.8476C36.4689 34.7956 36.5614 35.0343 36.697 35.2422C36.8651 35.5001 36.6042 35.5089 36.4919 35.6031C36.2883 35.7741 36.4232 36.0212 36.3999 36.2124C36.2997 37.0312 35.6651 37.2687 35.0648 37.4862C34.095 37.8376 33.0598 37.8723 32.0362 37.9142C28.787 38.0469 25.6694 37.4356 22.6877 36.1805C19.8966 35.0056 17.3921 33.3594 15.092 31.4064C14.1296 30.5892 13.2651 29.6699 12.3613 28.7919C11.6234 28.0753 10.8957 27.3564 10.2221 26.5819C9.12505 25.3205 8.06656 24.0299 7.08881 22.6731C5.46506 20.4201 3.92369 18.1178 2.7415 15.5998C2.11957 14.2754 1.69699 12.8843 1.46056 11.4403C1.4199 11.1934 1.4035 10.9431 1.44915 10.6932C1.48231 10.511 1.47197 10.2771 1.68558 10.2216C1.88386 10.1699 2.0914 10.2371 2.23476 10.5085C2.20302 10.0255 2.15844 9.57935 2.82138 9.72973C2.92016 9.75202 2.93763 9.67665 2.98792 9.61438C3.24931 9.29379 3.5214 9.29875 3.81464 9.61473C3.85479 9.50928 3.7032 9.34156 3.89563 9.29733C4.02754 9.26655 4.07982 9.40207 4.12143 9.49867C4.5729 10.5475 5.09394 11.5626 5.60774 12.5817C6.53129 14.4144 7.53803 16.1947 8.66213 17.9173C9.6953 19.5004 10.7994 21.0282 11.9539 22.5221C12.4079 23.1096 12.9267 23.6477 13.4667 24.1734C9.68043 19.7168 6.63356 14.8164 4.34538 9.45409C4.60431 9.51955 4.63801 9.75486 4.72431 9.93036C6.83865 14.2248 9.20553 18.3646 12.1868 22.139C13.068 23.2547 14.0295 24.2972 14.9796 25.3511C15.0866 25.4699 15.1792 25.5915 15.243 25.7365C15.0249 25.9892 14.9625 25.6484 14.9135 25.6024C14.4813 25.1961 14.0829 24.7551 13.6072 24.2535C13.8305 24.8564 16.4345 27.4613 16.8817 27.5473C16.4916 27.3094 16.1943 26.9712 15.8888 26.6475C15.6309 26.3744 15.2467 26.1766 15.2262 25.7299Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.866 22.6913C17.8905 22.1869 17.3362 22.0465 17.2593 21.62C17.2469 21.5498 17.1336 21.5197 17.0599 21.5665C16.9742 21.621 16.9224 21.7479 17.0008 21.8012C17.3471 22.0356 17.439 22.5078 17.866 22.6913ZM17.1169 19.779C16.3925 18.5904 15.6147 17.4361 14.9824 16.1953C15.4565 17.5297 16.1748 18.7211 17.1169 19.779ZM14.9878 13.4883C15.7487 16.1541 17.2114 18.4232 19.0147 20.4998C17.276 18.3867 16.0085 16.0074 14.9878 13.4883ZM16.7089 21.089C16.4526 20.6926 16.1616 20.3137 15.9489 19.8956C15.7065 19.4189 15.3692 19.0037 15.1436 18.5033C14.9715 18.1216 14.6909 17.7075 14.4699 17.3113C13.7102 15.9492 13.2684 14.4567 12.7923 12.9818C12.7121 12.7337 12.6803 12.4672 12.6541 12.2065C12.646 12.1246 12.7299 12.0292 12.6243 11.9616C12.5934 11.9415 12.5297 11.9408 12.4976 11.9594C12.3761 12.0295 12.4084 12.1479 12.4294 12.2524C12.5198 12.7043 12.7195 13.1632 12.6851 13.6049C12.6301 14.3143 13.0852 14.8183 13.2483 15.4314C13.3651 15.8709 13.7324 16.2454 13.7549 16.6706C13.7888 17.3095 14.1895 17.7199 14.451 18.2248C14.7012 18.7083 15.1886 19.0446 15.3858 19.5018C15.6788 20.1809 16.0973 20.6935 16.7089 21.089ZM12.4156 11.2738C12.4233 11.018 12.4237 10.8064 12.4383 10.5959C12.4477 10.4615 12.4251 10.3008 12.6086 10.2481C12.7712 10.201 12.8248 10.3366 12.9045 10.4279C12.9581 10.4894 13.0213 10.5308 13.1086 10.5167C13.0142 10.0277 13.0675 9.99086 13.5693 9.98732C13.6911 9.98626 13.9258 10.1756 14.0183 9.83658C14.0626 9.67417 14.202 9.87515 14.2563 9.96467C14.5831 10.5029 14.7543 11.1055 14.9072 11.7034C15.121 12.5391 15.4026 13.3531 15.6833 14.1644C16.3252 16.0197 17.3648 17.665 18.516 19.2492C19.2242 20.224 20.0374 21.0943 20.9711 21.8665C19.9625 20.628 18.7714 19.5292 17.9613 18.0284C18.2789 18.1014 18.3442 18.3138 18.445 18.4616C19.4657 19.9568 20.6636 21.2944 22.0327 22.4829C22.0927 22.535 22.2413 22.5645 22.1415 22.6835C21.8838 22.991 22.2365 23.1215 22.3571 23.2167C22.5344 23.3564 22.7516 23.6565 23.0873 23.3148C22.931 24.0392 23.6765 23.9383 23.849 24.3581C24.0298 24.1357 23.7336 24.0673 23.799 23.8686C24.1346 24.0837 24.4524 24.3122 24.7939 24.4976C25.0092 24.6146 24.5697 24.7406 24.8529 24.8854C25.2417 25.0844 25.5523 25.4321 25.9384 25.6383C26.1176 25.7339 26.05 25.9204 26.2312 26.0079C26.286 25.6457 26.4122 25.6351 26.6892 25.8639C27.124 26.2229 27.6259 26.4756 28.1941 26.5965C28.5781 26.6779 28.9057 26.9357 29.3036 26.9977C29.4198 27.0157 29.4121 27.1274 29.4352 27.2187C29.5351 27.6134 29.7289 27.7007 30.1028 27.5288C30.4509 27.3686 30.7903 27.2331 31.1846 27.4328C31.2951 27.4888 31.3369 27.5284 31.3843 27.6352C31.503 27.9028 31.9828 27.8915 32.1933 27.6643C32.4682 27.3672 32.9163 27.3171 33.2305 27.3668C33.7506 27.4488 34.0975 27.1492 34.5143 27.0171C34.7287 26.9493 34.8218 26.9979 34.9485 27.1425C35.2073 27.4383 34.8508 27.5556 34.7567 27.7137C34.6757 27.8495 34.4719 27.8828 34.6538 28.1001C34.7431 28.207 34.6407 28.3337 34.5428 28.4236C34.2874 28.6586 34.0952 29.024 33.6384 28.8538C33.6315 28.8513 33.3439 28.7802 33.4526 29.0461C33.4876 29.1321 33.3197 29.2845 33.1745 29.3154C32.503 29.4591 31.89 29.8135 31.1852 29.8461C31.0225 29.8536 30.8696 29.9518 30.8657 29.6867C30.8648 29.6261 30.8646 29.534 30.7849 29.5505C30.7184 29.5644 30.6075 29.6582 30.616 29.6896C30.706 30.0196 30.4429 30.0006 30.3053 29.942C29.9205 29.7783 29.5357 29.9931 29.1657 29.9005C28.579 29.7539 27.9615 29.7578 27.4208 29.3686C27.2253 29.228 26.8096 29.3077 26.4879 29.2201C25.6109 28.9816 24.8201 28.5494 24.002 28.1851C23.3638 27.9006 22.7684 27.5171 22.1601 27.1657C20.7475 26.3495 19.4923 25.341 18.3042 24.2429C16.8281 22.8784 15.5954 21.2998 14.5056 19.6325C13.3251 17.8267 12.378 15.8889 11.8771 13.7708C11.682 12.9461 11.5562 12.1114 11.7185 11.2631C11.7488 11.1052 11.6976 10.8673 11.9179 10.8328C12.1115 10.8025 12.2002 10.9913 12.276 11.1507C12.2928 11.1863 12.3387 11.2079 12.4156 11.2738Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7366 9.69362C17.8885 9.71839 17.9574 9.80119 18.0312 9.88045C18.1188 9.97457 18.1507 10.1986 18.3294 10.1051C18.5146 10.0078 18.343 9.86311 18.3021 9.7421C18.2872 9.69786 18.2544 9.65894 18.2433 9.61436C18.1942 9.4162 18.2316 9.29625 18.4715 9.39214C18.5221 9.41231 18.6257 9.48626 18.6114 9.42257C18.4841 8.85606 18.9515 9.17205 19.1292 9.06873C19.4989 8.85359 19.6101 9.24317 19.8263 9.37693C20.4287 9.74988 20.8193 10.3843 21.495 10.6807C21.7598 10.7969 21.7391 11.081 21.5936 11.3242C22.2352 11.3403 22.5265 11.8721 22.9139 12.2396C23.6928 12.9787 24.3352 13.9126 25.2221 14.4723C26.1217 15.0402 26.7163 15.8568 27.4905 16.5126L27.9774 17.338C28.0769 17.4365 28.1685 17.5448 28.2771 17.6319C28.8675 18.105 29.4376 18.5973 29.8635 19.2303C29.952 19.362 30.1821 19.4772 29.7812 19.574C29.6257 19.6114 29.5558 20.0678 29.4827 20.3427C29.4483 20.4724 29.4342 20.6256 29.2907 20.6195C28.7958 20.5986 28.3011 20.8056 27.8076 20.4655C26.5396 19.5916 25.3418 18.6444 24.2219 17.5858C23.3347 16.7472 22.488 15.8734 21.6432 14.9955C20.9633 14.2889 20.3269 13.5494 19.7256 12.7711C19.1266 11.9956 18.4365 11.2892 17.8816 10.4735C17.7169 10.2315 17.6614 10.0008 17.7366 9.69362Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5809 10.079C15.1665 11.1455 15.4714 12.3059 15.791 13.4615L15.6795 13.4985C15.3133 12.3587 14.947 11.2187 14.5809 10.079Z" fill="#F2B344"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9441 13.8466C16.3038 14.6447 16.6637 15.4429 17.0234 16.241C16.4215 15.5493 16.1479 14.7085 15.9441 13.8466Z" fill="#F2B344"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_section;