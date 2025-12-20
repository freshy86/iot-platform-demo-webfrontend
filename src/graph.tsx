import React from "react";

export async function callMsGraph(accessToken: string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch("https://svfr-iot-fullstack-webapi.azurewebsites.net/Test", options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const ProfileData = (props: any) => {
    const data = props.graphData || [];

    if (!Array.isArray(data)) {
        return <div id="profile-div">No graph data available</div>;
    }

    return (
        <div id="profile-div">
            <ul>
                {data.map((item: any, idx: number) => (
                    <li key={idx}>Temperature: {item.temperatureC}</li>
                ))}
            </ul>
        </div>
    );
};
