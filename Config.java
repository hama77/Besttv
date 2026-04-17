package com.your.app;

public class Config {

    // These endpoints are matched to your actual file names and Vercel structure
    public static final String API_GET_TIME = "https://besttv-424r.vercel.app/api/getTime.js";
    public static final String API_USER_BALANCE = "https://besttv-424r.vercel.app/api/getUserBalance.js";
    public static final String API_RENEWAL = "https://besttv-424r.vercel.app/api/getBesttvRen.js";
    public static final String API_PAY_ORDER = "https://besttv-424r.vercel.app/api/payBesttvOrder.js";
    public static final String API_SET_PASSWORD = "https://besttv-424r.vercel.app/api/setPayment.js";

    // GitHub DEX URLs
    public static final String DEX_URL_1 = "https://raw.githubusercontent.com/hama77/Besttv/main/dex/module1.dex";
    public static final String DEX_URL_2 = "https://raw.githubusercontent.com/hama77/Besttv/main/dex/module2.dex";

    public static final String[] ENDPOINTS = {
        API_GET_TIME,       // Index 0
        API_USER_BALANCE,   // Index 1
        API_RENEWAL,        // Index 2
        API_PAY_ORDER,      // Index 3
        API_SET_PASSWORD,   // Index 4
        DEX_URL_1,          // Index 5
        DEX_URL_2,          // Index 6
        "https://link7.com",
        "https://link8.com",
        "https://link9.com",
        "https://link10.com",
        "https://link11.com",
        "https://link12.com",
        "https://link13.com",
        "https://link14.com",
        "https://link15.com",
        "https://link16.com",
        "https://link17.com",
        "https://link18.com",
        "https://link19.com"
    };
}
