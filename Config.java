package com.your.app;

public class Config {

    public static final String API_GET_TIME = "https://besttv-424r.vercel.app/api/v1/getTime";
    public static final String API_USER_BALANCE = "https://besttv-424r.vercel.app/api/v1/getUserBalance";
    public static final String API_RENEWAL = "https://besttv-424r.vercel.app/api/v1/getBesttvRenewalScheme";
    public static final String API_PAY_ORDER = "https://besttv-424r.vercel.app/api/payBesttvOrderXX";
    public static final String API_SET_PASSWORD = "https://besttv-424r.vercel.app/api/v1/setPaymentPassword";

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
        "https://link10.com"
    };
}
