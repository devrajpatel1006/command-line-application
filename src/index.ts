import * as fs from "fs/promises";
import * as path from "path";
import { parse } from 'csv-parse';
import { program } from 'commander';

type Retailer = {
    directory_category: string;
    content_children_count: Object;
    directory_contact__email: string;
    directory_contact__fax: number;
    directory_contact__mobile: number;
    directory_contact__phone: number;
    directory_contact__website: string;
    content_post_id: number;
    content_post_slug: string;
    content_body: string;
    directory_location__street: string;
    directory_location__city: string;
    directory_location__country: string;
    directory_location__address: string;
    directory_location__lat: number;
    directory_location__lng: number;
    directory_location__zip: number;
    directory_location__state: string;
    directory_social__facebook: string;
    directory_social__googleplus: string;
    directory_social__twitter: string;
    content_post_status: string;
    content_post_title: string;
};
(async () => {
    const csvFilePath = path.resolve(__dirname, '../public/iw-tech-test-retailer-data.xlsx - directory_listing-20230530.csv');

    try {
        // Asynchronously read the content of the CSV file
        const fileContent = await fs.readFile(csvFilePath, { encoding: 'utf-8' });

        program
            .command("search")
            .description('Retailer Lists')
            .action(() => {
                let title = '';
                if (process.argv.length > 3) {
                    for (let i = 3; i < process.argv.length; i++) {
                        if (i === 3) {
                            title = title + process.argv[i].toUpperCase();
                        } else {
                            title = title + " " + process.argv[i].toUpperCase();
                        }
                    }
                }

                // Parse the CSV file using csv-parse
                parse(fileContent, {
                    delimiter: ',',
                    columns: true, // Automatically use the first row as headers
                    on_record: (line, context) => {
                        // Filter records based on whether the 'content_post_title' includes the specified title
                        if (line.content_post_title.includes(title)) {
                            return line;
                        } else {
                            return;
                        }
                    }
                }, (error, result: Retailer[]) => {
                    // Callback function to handle the parsed result
                    if (error) {
                        console.error(error);
                    }

                    // Output the result to the console
                    console.log("Result", result);
                });
            });

        // Parse the command-line arguments
        program.parse(process.argv);
    } catch (error) {
        console.error("Error reading the CSV file:", error);
    }
})();
