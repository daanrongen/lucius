#include <ArduinoHttpClient.h>
#include <WiFi101.h>
#include "wifi_secrets.h"

char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

char serverAddress[] = "192.168.178.74";
int port = 4000;

WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);
int status = WL_IDLE_STATUS;
String response;
int statusCode = 0;

void setup() {
  Serial.begin(9600);
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
  }

  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
}

void sendData(bool value) {
  Serial.println("\nStarting connection to server...");
  statusCode = client.responseStatusCode();
  response = client.responseBody();

  if (client.connect(serverAddress, port)) {
    Serial.println("connection succesful");
    Serial.println("making POST request");
    String contentType = "application/json";
    String body = String (value);

    client.post("/", contentType, body);
    client.println("Content-Length:" + body.length());
    client.println("Connection: keep-alive");

  } else {
    Serial.println("connection failed");
  }
  Serial.print("Status code: ");
  Serial.println(statusCode);
  Serial.print("Response: ");
  Serial.println(response);
  delay(5000);
}

void loop() {
  sendData(true);
}
