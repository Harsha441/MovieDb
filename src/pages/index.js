import Main from "@/components/Main";
import Row from "@/components/Row";
import requests from "@/requests";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>MovieDb</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Main />
				<Row rowId="1" title="Trending" fetchURL={requests.requestTrending} />
				{/* <TrailerSection /> */}
				<Row rowId="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
				<Row
					rowId="3"
					title="Now Playing"
					fetchURL={requests.requestNowPlaying}
				/>
				<Row rowId="4" title="Top Rated" fetchURL={requests.requestToprated} />
			</>
		</>
	);
}
