"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function PlayersPage() {
    const [players, setPlayers] = useState([]);

    const getPlayers = () => {
        axios.get("https://www.balldontlie.io/api/v1/players").then((res) => {
            setPlayers(res.data.data)
            console.log(res.data.data)
        })
    }

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <main>
            <div className="py-12">
                <div className="container mx-auto relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Player
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Team
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Height | Weight
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Division
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((v, i) => {
                                    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {v.first_name + " " + v.last_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {v.team.full_name}

                                        </td>
                                        <td className="px-6 py-4">
                                            {v.position}

                                        </td>
                                        <td className="px-6 py-4">
                                            {v.height_feet
                                                + " | " + v.weight_pounds}
                                        </td>
                                        <td className="px-6 py-4">
                                            {v.team.division}

                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={`/view-player/${v.id}`}>
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    )
}