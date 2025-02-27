import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class Solution {
    public static String[] transferAmount(String name, String city) throws Exception {
        String apiUrl = "https://jsonmock.hackerrank.com/api/transactions";
        Gson gson = new Gson();
        double maxCredit = 0.0, maxDebit = 0.0;
        int page = 1, totalPages = 1;
        
        while (page <= totalPages) {
            URL url = new URL(apiUrl + "?page=" + page);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = in.readLine()) != null) {
                response.append(line);
            }
            in.close();
            
            JsonObject rootNode = gson.fromJson(response.toString(), JsonObject.class);
            if (page == 1) {
                totalPages = rootNode.get("total_pages").getAsInt();
            }
            
            JsonArray dataArray = rootNode.getAsJsonArray("data");
            for (int i = 0; i < dataArray.size(); i++) {
                JsonObject record = dataArray.get(i).getAsJsonObject();
                if (record.get("userName").getAsString().equals(name) && 
                    record.get("location").getAsJsonObject().get("city").getAsString().equals(city)) {
                    
                    double amount = parseCurrency(record.get("amount").getAsString());
                    String txnType = record.get("txnType").getAsString();
                    
                    if (txnType.equals("credit")) {
                        maxCredit = Math.max(maxCredit, amount);
                    } else if (txnType.equals("debit")) {
                        maxDebit = Math.max(maxDebit, amount);
                    }
                }
            }
            page++;
        }
        
        return new String[]{formatCurrency(maxCredit), formatCurrency(maxDebit)};
    }

    private static double parseCurrency(String amount) {
        return Double.parseDouble(amount.replaceAll("[^0-9.]+", ""));
    }

    private static String formatCurrency(double amount) {
        return String.format("$%,.2f", amount);
    }

    public static void main(String[] args) throws Exception {
        String name = "Bob Martin";
        String city = "Bourg";
        
        String[] result = transferAmount(name, city);
        System.out.println(result[0]);
        System.out.println(result[1]);
    }
}
