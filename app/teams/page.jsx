"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function TeamsPxage() {
    const [players, setPlayers] = useState([]);

    const getPlayers = () => {
        axios.get("https://www.balldontlie.io/api/v1/teams").then((res) => {
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
                                    Abbr
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Conference
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
                                            {v.abbreviation}
                                        </th>
                                        <td className="px-6 py-4">
                                            {v.full_name}

                                        </td>
                                        <td className="px-6 py-4">
                                            {v.city}

                                        </td>
                                        <td className="px-6 py-4">
                                            {v.conference}

                                        </td>
                                        <td className="px-6 py-4">
                                            {v.division}
                                        </td>
                                       
                                        <td className="px-6 py-4">
                                            <Link href={`/view-team/${v.id}`}>
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