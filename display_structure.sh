#!/usr/bin/env sh

# Function to escape special characters for grep pattern
escape_for_grep() {
    echo "$1" | sed 's/[\\\/&]/\\&/g'
}

# Output file
OUTPUT_FILE="structure.txt"

# Check if tree command is available
if ! command -v tree &> /dev/null; then
    echo "Error: 'tree' command not found. Please install it first." > "$OUTPUT_FILE"
    echo "You can install it using:" >> "$OUTPUT_FILE"
    echo "  - On Ubuntu/Debian: sudo apt-get install tree" >> "$OUTPUT_FILE"
    echo "  - On CentOS/RHEL: sudo yum install tree" >> "$OUTPUT_FILE"
    echo "  - On macOS with Homebrew: brew install tree" >> "$OUTPUT_FILE"
    exit 1
fi

# Initialize the output file
echo "Writing directory structure and file contents to $OUTPUT_FILE..."

# Print the directory structure to the output file
echo "=====================================" > "$OUTPUT_FILE"
echo >> "$OUTPUT_FILE"
tree -a >> "$OUTPUT_FILE"
echo >> "$OUTPUT_FILE"
echo "=====================================" >> "$OUTPUT_FILE"
echo >> "$OUTPUT_FILE"

# Find all regular files (excluding hidden files and directories)
# and print their contents to the output file
find . -type f -not -path "*/\.*" | sort | while read -r file; do
    # Check if the file is binary
    if file "$file" | grep -q "binary\|image\|executable"; then
        echo "*# $file* [Binary file - contents not displayed]" >> "$OUTPUT_FILE"
        echo >> "$OUTPUT_FILE"
        echo "-------------------------------------------------------" >> "$OUTPUT_FILE"
        echo >> "$OUTPUT_FILE"
    else
        echo "*# $file*" >> "$OUTPUT_FILE"
        # Print file contents
        cat "$file" >> "$OUTPUT_FILE"
        echo >> "$OUTPUT_FILE"
        echo "-------------------------------------------------------" >> "$OUTPUT_FILE"
        echo >> "$OUTPUT_FILE"
    fi
done

echo "Structure and file contents have been written to $OUTPUT_FILE"