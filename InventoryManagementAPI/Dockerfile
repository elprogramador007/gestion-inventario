FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["InventoryManagementAPI.csproj", "./"]
RUN dotnet restore "InventoryManagementAPI.csproj"
COPY . .
RUN dotnet build "InventoryManagementAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "InventoryManagementAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Add these environment variables
ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_URLS=http://+:80

ENTRYPOINT ["dotnet", "InventoryManagementAPI.dll"]